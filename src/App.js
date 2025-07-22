import React, { useState,useRef, useEffect } from 'react'
import HelpCommand from './commands/HelpCommand'
import SkillsCommand from './commands/SkillsCommand'
import ProjectsCommand from './commands/ProjectsCommand'
import HistoryCommand from './commands/HistoryCommand'
import AboutCommand from './commands/AboutCommand'
import ContactCommand from './commands/ContactCommand'
import WhoamiCommand from './commands/WhoamiCommand'
import WelcomeMsg from './messages/WelcomeMsg'

const App = () => {

  const [input,setInput] =useState('')
  const [outputs,setOutputs] = useState([])
  const [commandHistory,setCommandHistory] = useState([])
  const [historyIndex,setHistoryIndex] = useState(-1);
  const [isTyping,setIsTyping] = useState(false);
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  const commands = {
    help:'help',
    about:'about',
    skills:'skills',
    experience:'experience',
    whoami:'whoami',
    projects:'projects',
    clear:'clear',
    contact:'contact',
    history:'history',
    socials:'socials'
  }

  const getCommandOutput = (cmd)=>{

    const command = cmd.toLowerCase().trim()

    switch (command) {

      case 'help': return (<HelpCommand/>)
      case 'skills': return (<SkillsCommand/>)
      case 'projects' : return (<ProjectsCommand/>)
      case 'history' : return (<HistoryCommand/>)
      case 'about' : return (<AboutCommand/>)
      case 'contact': return (<ContactCommand/>)
      case 'clear': return (<></>)
      case 'whoami': return (<WhoamiCommand/>)
    } 

  }


  useEffect(()=>{

    if(outputs.length===0){

      const welcomeOutput = {
        id:'welcome',
        command:'',
        output:<WelcomeMsg/>,
      }
      setOutputs([welcomeOutput])
    }

  },[])

  const handleCommand = (cmd)=>{

    

  }

  const handeKeyDown = (e)=>{


  }
  return (
    <div className=' min-h-screen bg-gray-900 font-mono  '>

      
      
      <div className=' flex items-center gap-2'>


        <span className=' text-green-400'>harsh.sahani@portfolio:~$</span>
        <input
         ref={inputRef}
         onChange={(e)=> setInput(e.target.value)}
         type='text'
         placeholder='Type a command...'
         className=' bg-transparent text-white outline-none'
         onKeyDown={handeKeyDown}
         value={input}
        >
        </input>
      </div>

    </div>
  )
}

export default App