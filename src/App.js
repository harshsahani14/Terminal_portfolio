import React, { useState,useRef } from 'react'
import HelpCommand from './commands/HelpCommand'
import SkillsCommand from './commands/SkillsCommand'
import ProjectsCommand from './commands/ProjectsCommand'
import HistoryCommand from './commands/HistoryCommand'
import AboutCommand from './commands/AboutCommand'
import ContactCommand from './commands/ContactCommand'
import SocialsCommand from './commands/SocialsCommand'
import WhoamiCommand from './commands/WhoamiCommand'

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
      case 'socials': return (<SocialsCommand/>)
      case 'clear': return (<></>)
      case 'whoami': return (<WhoamiCommand/>)
    } 

  }

  return (
    <div className=' min-h-screen bg-gray-900 font-mono  '>


    </div>
  )
}

export default App