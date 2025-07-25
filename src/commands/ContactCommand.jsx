import React from 'react'
import { Mail } from 'lucide-react'

const ContactCommand = () => {
  return (
    <div className=' flex flex-col gap-3'>
      <div className=' text-blue-400 flex gap-2'>
        <Mail className=' w-[18px]'/>
        Contact Information
      </div>

      <div className=' flex gap-2 mt-2'>
        <span>✉️</span> 
        <span className=' text-white '>harshsahani078@gmail.com</span>
      </div>

      <div className=' flex gap-2'>
        <span>💼</span> 
        <span className=' text-white hover:underline cursor-pointer'>https://www.linkedin.com/in/harsh-sahani/</span>
      </div>

      <div className=' flex gap-2'>
        <span>🧑‍💻</span> 
        <span className=' text-white hover:underline cursor-pointer'>https://leetcode.com/u/Harshsahani10/</span>
      </div>

      <div className=' flex gap-2'>
        <span>🐙</span> 
        <span className=' text-white hover:underline cursor-pointer'>https://github.com/harshsahani14</span>
      </div>
    </div>
  )
}

export default ContactCommand