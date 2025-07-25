import React, { useState,useRef, useEffect } from 'react'
import HelpCommand from './commands/HelpCommand'
import SkillsCommand from './commands/SkillsCommand'
import ProjectsCommand from './commands/ProjectsCommand'
import HistoryCommand from './commands/HistoryCommand'
import AboutCommand from './commands/AboutCommand'
import ContactCommand from './commands/ContactCommand'
import WhoamiCommand from './commands/WhoamiCommand'
import WelcomeMsg from './messages/WelcomeMsg'
import NotFound from './commands/NotFound'
import AchievementsCommand from './commands/AchievementsCommand'

const App = () => {

  const [input,setInput] =useState('')
  const [outputs,setOutputs] = useState([])
  const [commandHistory,setCommandHistory] = useState([])
  const [historyIndex,setHistoryIndex] = useState(0);
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

  useEffect( ()=>{
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
  },[outputs])

  const getCommandOutput = (cmd)=>{

    const command = cmd.toLowerCase().trim()

    switch (command) {

      case 'help': return (<HelpCommand/>)
      case 'skills': return (<SkillsCommand/>)
      case 'projects' : return (<ProjectsCommand/>)
      case 'history' : return (<HistoryCommand/>)
      case 'about' : return (<AboutCommand/>)
      case 'contact': return (<ContactCommand/>)
      case 'clear': return ''
      case 'whoami': return (<WhoamiCommand/>)
      case 'banner': return (<WelcomeMsg/>)
      case 'achievements': return (<AchievementsCommand/>)
      default : return (<NotFound/>)
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

    const currCommand = cmd.trim()

    if(currCommand==='') return
    
    if(currCommand === 'clear'){
      setOutputs([])
      setCommandHistory(prev => [...prev, currCommand]);
      return;
    }

    const newOutput = {

      id:`${currCommand}`,
      command:currCommand,
      output:getCommandOutput(currCommand)
    }

    setHistoryIndex(prev => prev+1);
    setCommandHistory( prev => [...prev,newOutput])
    setOutputs(prev => [...prev, newOutput]);    

  }

  const handeKeyDown = (e)=>{

    
    if(e.key === 'Enter'){
      handleCommand(input);
      setInput('')
    }
    else if(e.key === 'ArrowUp'){
      
      // e.preventDefault()
      // const idx = ( commandHistory.length>0 && historyIndex>0 ) ? historyIndex-1 : 0

      // setHistoryIndex(idx)
      // setInput(commandHistory[idx])
    }
    else if( e.key === 'ArrowDown'){

    }
    else if( e.key === 'Tab' ){

    } 

  }
  return (
    <div className=' min-h-screen bg-gray-900 font-mono pb-6 pt-4 '>

      <div className=' overflow-y-auto   '>

        
      {

        outputs.map( (output)=>(

          <div key={output.id} className=' pl-4 h-full pb-4  '>

            <div className=' mb-2'>
              {
                output.command && (
                  
                  <div className=' flex items-center gap-2'>
                    <span className=' text-green-400'>harsh.sahani@portfolio:~$</span>
                    <span className=' text-white'> {output.command} </span>
                  </div>
                )
              }
            </div>
              
            
          
              {
                typeof output.output !== 'string' &&
                (
                  output.output
                )
              }
            


          </div>
        ))
      }

      </div>
      

      <div className=' flex items-center gap-2 pl-4  '>


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