import React from 'react'

const HelpCommand = () => {
  return (
    <div className=''>
      
      <div className=' text-yellow-300 '>Available commands</div>
      <div className=' flex gap-[100px] text-[#fff]  mt-2 text-md te'>

        <div className=' '>
          <ul className=' flex flex-col gap-3'>
            <li> <span className=' text-pink-400 glow-text  '>'projects'</span>  <span className=' ml-[24px] '>View my projects</span> </li>
            <li> <span className='text-pink-400 glow-text'>'skills'</span>   <span className=' ml-[40px]'>View my technical skills</span></li>
            <li> <span className=' text-pink-400 glow-text'>'contact'</span>   <span className=' ml-8'>Get my contact information</span></li>
            <li>  <span className='text-pink-400 glow-text'>'history'</span>   <span className=' ml-8'>Show command history</span> </li>
          </ul>
          
        </div>
        <div className=' '>
          <ul className=' flex flex-col gap-3'>
            <li> <span className=' text-pink-400 glow-text'>'whoami'</span>  <span className=' ml-[75.5px]'>Display current user</span></li>
            <li> <span className=' text-pink-400 glow-text'>'about'</span>  <span className=' ml-[84px]'>Get to know about me</span></li>
            <li>  <span className=' text-pink-400 glow-text'>'clear'</span>  <span className=' ml-[84px]'>Clear the terminal</span></li>
            <li> <span className=' text-pink-400 glow-text'>'achievments'</span>  <span className=' ml-[32px]'>See my achievments</span></li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default HelpCommand