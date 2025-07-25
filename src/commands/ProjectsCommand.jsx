import { Briefcase } from 'lucide-react'
import React from 'react'

const ProjectsCommand = () => {
  return (
    <div>
      <div className=' text-orange-400 flex gap-2'>
        <Briefcase className=' w-[20px]'/>
        <p className=' text-md'>Featured Projects</p>
      </div>

      <div className=' flex gap-3 mt-3'>
        <div className=' w-[2px] h-[100px] bg-green-400'>

        </div>
        <div className=' ml-2 flex flex-col'>
          <a href='https://github.com/harshsahani14/Streamhub' className=' text-green-400 text-[20px] font-bold
           hover:underline'>StreamHub</a>
          <p className=' text-gray-400'> A platform where you can connect with different language speaking partners.</p>

          <div className=' flex gap-3 mt-2'>
            <div className=' w-[50px] h-[30px]  bg-gray-700 rounded-md flex justify-center items-center text-gray-300 '>
                MERN
            </div>

            <div className=' w-[80px] h-[30px]  bg-gray-700 rounded-md flex justify-center items-center text-gray-300 '>
                Tailwind
            </div>

            <div className=' w-[125px] h-[30px]  bg-gray-700 rounded-md flex justify-center items-center text-gray-300 '>
                TanStackQuery
            </div>

            <div className=' w-[65px] h-[30px]  bg-gray-700 rounded-md flex justify-center items-center text-gray-300 '>
                Stream 
            </div>
          </div>
        </div>  
      </div>

      <div className=' flex gap-3 mt-3'>
        <div className=' w-[2px] h-[100px] bg-blue-500'>

        </div>
        <div className=' ml-2 flex flex-col'>
          <a href='https://github.com/harshsahani14/Course_Mangement_System' className=' text-blue-500 text-[20px] font-bold
           hover:underline'>Course management API</a>
          <p className=' text-gray-400'>Backend for an edtech website in javascript</p>

          <div className=' flex gap-3 mt-2'>
            <div className=' w-[90px] h-[30px]  bg-gray-700 rounded-md flex justify-center items-center text-gray-300 '>
                ExpressJs
            </div>

            <div className=' w-[65px] h-[30px]  bg-gray-700 rounded-md flex justify-center items-center text-gray-300 '>
                NodeJs
            </div>

            <div className=' w-[80px] h-[30px]  bg-gray-700 rounded-md flex justify-center items-center text-gray-300 '>
                RazorPay
            </div>

            <div className=' w-[95px] h-[30px]  bg-gray-700 rounded-md flex justify-center items-center text-gray-300 '>
                Nodemailer 
            </div>
          </div>
        </div>  

        
      </div>

      <div className=' flex gap-3 mt-3'>
        <div className=' w-[2px] h-[100px] bg-purple-400'>

        </div>
        <div className=' ml-2 flex flex-col'>
          <a href='https://github.com/harshsahani14/PacMan' className=' text-purple-400 text-[20px] font-bold
           hover:underline'>PacMan</a>
          <p className=' text-gray-400'>This is PacMan game made using JAVA + Swing(Gui Library).</p>

          <div className=' flex gap-3 mt-2'>
            <div className=' w-[50px] h-[30px]  bg-gray-700 rounded-md flex justify-center items-center text-gray-300 '>
                JAVA
            </div>

            <div className=' w-[55px] h-[30px]  bg-gray-700 rounded-md flex justify-center items-center text-gray-300 '>
                Swing
            </div>

          
          </div>
        </div>  
      </div>
    </div>
  )
}

export default ProjectsCommand