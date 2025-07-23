import React from 'react'

const HelpCommand = () => {
  return (
    <div className=''>
      
      <div className=' text-yellow-300 '>Available commands</div>
      <div className=' flex gap-[100px] text-red-500 font-light mt-2 text-sm'>

        <div className=' '>
          <ul className=' flex flex-col gap-3'>
            <li>help  <span className=' ml-[55px]'>Browse this CLI</span> </li>
            <li>skills  <span className=' ml-[40px]'>View my technical skills</span></li>
            <li>contact  <span className=' ml-8'>Get my contact information</span></li>
            <li>history  <span className=' ml-8'>Show command history</span> </li>
          </ul>
          
        </div>
        <div className=' '>
          <ul>
            <li>whoami</li>
            <li>about</li>
            <li>clear</li>
            <li>achievments</li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default HelpCommand