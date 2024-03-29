import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex shadow-sm items-center  z-50  justify-between gap-1 px-1 py-3 bg-white sticky top-0 left-0 w-full'>
     <div className=' md:max-w-[300px] md:w-full text-center'>
     <Link to={"/"}>
     <p className='text-2xl font-[Roboto] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] cursor-pointer'>Resume Editor</p>
     </Link>
     </div>
      <Link to={"/editor"}>
      <Button
        label='Create Resume'
        classes='text-white bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-full py-2 px-5 flex items-center gap-2'
      />
      </Link>
    </div>
  )
}

export default Nav