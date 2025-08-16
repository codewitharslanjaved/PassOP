import React from 'react'

const Logo = ({props}) => {
    return (
        <div>
            <div className="logo font-bold cursor-pointer">
                <span className='text-green-500'> &lt;</span>
                <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
            </div>
        </div>
    )
}

export default Logo
