import { Briefcase } from 'lucide-react'
import React from 'react'

const ProjectsCommand = () => {
  return (
    <div>
      <div className=' text-orange-400 flex gap-2'>
        <Briefcase className=' w-[20px]'/>
        <p className=' text-md'>Featured Projects</p>
      </div>
    </div>
  )
}

export default ProjectsCommand