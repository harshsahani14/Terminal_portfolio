import { Terminal } from 'lucide-react';
import React from 'react'

const WelcomeMsg = () => {

  const asciiArt = `
╔═════════════════════════════════════════════╗
║  ██╗  ██╗███████╗██╗     ██╗      ██████╗   ║
║  ██║  ██║██╔════╝██║     ██║     ██╔═══██╗  ║
║  ███████║█████╗  ██║     ██║     ██║   ██║  ║
║  ██╔══██║██╔══╝  ██║     ██║     ██║   ██║  ║
║  ██║  ██║███████╗███████╗███████╗╚██████╔╝  ║
║  ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝   ║             
╚═════════════════════════════════════════════╝
`;
  return (
    <div >

      <div className=' flex gap-2 text-[#00FF00]'>
        <Terminal/> <span> Terminal portfolio v2.1.0</span>
      </div>
      <pre style={{ color: '#00FF00', fontFamily: 'monospace', whiteSpace: 'pre' }}>
      {asciiArt}
    </pre>

    <div>
      <div className=' text-gray-400'> Type <span className=' text-yellow-300'>'help'</span> to see available commands</div>
    </div>

    <div className=' text-white mt-3'>

      <ul>
        <li>💡 Pro tips:</li>
        <li>• Use Tab for auto-completion</li>
        <li>• Use ↑↓ for command history</li>
      </ul>
    </div>


    </div>
  )
}

export default WelcomeMsg