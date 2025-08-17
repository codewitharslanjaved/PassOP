import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import Logo from './Logo'
import { NavLink } from 'react-router-dom'


const Manager = () => {
    const ref = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    const passwordRef = useRef()

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = (text) => {
        toast.success('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        navigator.clipboard.writeText(text)
    }

    const showPassword = () => {
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            let formData = [...passwordArray, { ...form, id: uuidv4() }]
            setPasswordArray(formData)
            localStorage.setItem("passwords", JSON.stringify(formData))
            setForm({ site: "", username: "", password: "" })
            toast.success('Password Saved!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else{
            toast.error('All fields are required!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const deletePassword = (id) => {
        let formData = passwordArray.filter(item => item.id !== id)
        setPasswordArray(formData)
        localStorage.setItem("passwords", JSON.stringify(formData))
        toast.error('Password Deleted!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    const editPassword = (id) => {
        setForm(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>

            
            <div className="p-2 md:p-0 md:mycontainer mb-20 my-8">
                <h1 className='text-4xl text-center'>
                    <Logo />
                </h1>
                <p className='text-green-900 text-center text-lg cursor-pointer py-3'>Your Own Fast & Secure Password Manager</p>
                <div className="flex flex-col items-center p-4 text-black gap-8">
                    <input name='site' onChange={handleChange} value={form.site} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-2' type="text" id='site' />
                    <div className="flex flex-col md:flex-row w-full gap-8 justify-between">
                        <input name='username' onChange={handleChange} value={form.username} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-2' type="text" id='username' />
                        <div className="relative">
                            <input ref={passwordRef} name='password' onChange={handleChange} value={form.password} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-2' type="password" id='password' />
                            <span className='absolute right-[4px] top-[8px] cursor-pointer' onClick={showPassword}>
                                <img className='p-1' width={26} ref={ref} src="icons/eye.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex gap-2 justify-center items-center bg-green-500 rounded-full px-8 py-2 hover:bg-green-400 border border-green-900 transition-all w-fit'><lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover"
                    >
                    </lord-icon>Save</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4 cursor-pointer'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='cursor-pointer text-center '>
                        <h2 className='font-bold text-lg'>Get Started By Adding Your Passwords</h2>
                        <div>--------------- or ---------------</div>
                        <h3 className='font-bold text-md'>Try PassOP Password Generator</h3>
                        <NavLink to="/pass-gen">
                        <button className='p-5 py-3 bg-green-500 font-bold my-5 rounded-full transition-all hover:bg-green-400 border border-black'>Password Generator</button>
                        </NavLink>
                    </div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='bg-green-500 text-white"'>
                            <tr>
                                <th className='py-2 text-center w-32'>Site</th>
                                <th className='py-2 text-center w-32'>Username</th>
                                <th className='py-2 text-center w-32'>Password</th>
                                <th className='py-2 text-center w-32'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='py-2 text-center border border-white'>
                                            <div className='flex items-center justify-center'>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='lordicon-copy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}></lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 text-center border border-white cursor-pointer'>
                                            <div className='flex items-center justify-center'>
                                                <span>{item.username}</span>
                                                <div className='lordicon-copy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                    <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}></lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 text-center border border-white cursor-pointer'>
                                            <div className='flex items-center justify-center'>
                                            <span>{"*".repeat(item.password.length)}</span>
                                                <div className='lordicon-copy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}></lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 text-center border border-white cursor-pointer'>
                                            <span className='cursor-pointer mx-1 md:mx-2' onClick={() => editPassword(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}
                                                ></lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-1 md:mx-2' onClick={() => deletePassword(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}
                                                ></lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
