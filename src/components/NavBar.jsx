import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className='bg-gree-800 text-black sticky top-0'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <a className='text-xl md:text-3xl' href="#">
                    <Logo />
                </a>
                <ul className='flex gap-4 text-lg'>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/"><li>Home</li></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/pass-gen"><li>Pass Gen</li></NavLink>
                </ul>
                {/* <button className='bg-green-700 text-white my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-1'>
                    <img className='w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                </button> */}

            </div>
        </nav>
    )
}

export default NavBar
