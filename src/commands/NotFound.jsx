import React from 'react'

const NotFound = ({cmd}) => {
  return (
    <div>
      <div className=' text-red-500'>No such command avaliable:<span className='text-gray-400 ml-3'>{cmd}</span></div>
      <div className=' text-gray-400 mt-2'>Type <span className=' text-yellow-300'>'help'</span> to see the list of available commands.</div>
    </div>
  )
}

export default NotFound