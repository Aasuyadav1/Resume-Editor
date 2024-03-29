import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='md:mt-28 mt-14 py-3 flex justify-center items-center px-2 gap-4 md:justify-between md:gap-20 flex-wrap md:px-20'>
   <p className='text-lg'> © 2024 all rights reserved</p>
   <p className='text-lg'>Developed by Aasu 💖</p>
    <div className='text-xl flex items-center gap-3'>
      <a href="https://www.linkedin.com/in/aasu-yadavv/" target='_blank'><CiLinkedin /></a>
      <a href="https://twitter.com/Aasuyadavv" target='_blank'><FaXTwitter /></a>
      <a href="https://github.com/Aasuyadav1" target='_blank'><FaGithub /></a>
    </div>
    </div>
  )
}

export default Footer