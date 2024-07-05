import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex flex-row justify-between'>
            <div>
                <h1 className='text-3xl pt-4'>Sai<span className='font-bold text-green-500 m-1'>.</span></h1>
            </div>
            <div>
                <ul className='flex flex-row  px-2 pt-1 gap-2'>
                    <li className='p-4'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='p-4'>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li className='p-4'>
                        <Link to='/resume'>Resume</Link>
                    </li>
                    <button className='p-2 bg-orange-600 rounded text-white'>Hire Me</button>
                </ul>
            </div>
        </div>
  )
}

export default Header