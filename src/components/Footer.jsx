import React from 'react'
import Logo from './Logo'

const Footer = () => {
    return (
        <div className='bg-green-950 py-2 text-white flex justify-between px-5 items-center w-full cursor-pointer fixed bottom-0'>
            <a className='text-2xl' href="#">
                <Logo />
            </a>
            <div className='flex justify-center items-center'>
                Created by Arslan Javed
            </div>
        </div>

    )
}

export default Footer
