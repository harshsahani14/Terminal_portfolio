import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutCommand = () => {
  return (
    <div className=' '>

      <div className=' text-gray-400'>
      Hey there! I am Harsh Sahani, a CSE student from Thakur College of Engineering and Technology
      <br/>
      Throughout my coding journey, I have participated in various national level hackathons like SIH 2023
      <br/>
      I have developed several projects in ReactJS, NodeJs, ExpressJs, Spring Boot, MongoDB and MySQL
      <br/>
      I am always eager to learn new technologies and improve my skills
      <br/>
      Feel free to connect with me on LinkedIn or GitHub!

      </div>

      <div className=' flex flex-col gap-2 mt-5'>
        <div>
          <span className=' text-gray-400 '>
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 text-[18px]" />
            Linkedin</span>
          <a href='https://www.linkedin.com/in/harsh-sahani/' className=' text-blue-500 hover:underline ml-[100px]'>https://www.linkedin.com/in/harsh-sahani/</a>
        </div>

        <div className=' flex '>
          <span className=' text-gray-400 flex'>
            <FontAwesomeIcon icon={faTrophy} className=' text-[14px] mt-[4px]' />
            Leetcode</span>
          <a href='https://leetcode.com/u/Harshsahani10/' className=' text-blue-500 hover:underline ml-[104px]'>https://leetcode.com/u/Harshsahani10/</a>
        </div>

        <div>
          <span className=' text-gray-400 '>
            <FontAwesomeIcon icon={faGithub} />

            GitHub</span>
          <a href='https://github.com/harshsahani14' className=' text-blue-500 hover:underline ml-[119px]'>
          https://github.com/harshsahani14</a>
        </div>

        
      </div>
    </div>
  )
}

export default AboutCommand