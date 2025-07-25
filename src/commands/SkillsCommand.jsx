import React from 'react'


const SkillsCommand = () => {

  const skills = {

    languages:['Java','JavaScript','Sql'],
    librariesAndframeworks:['Reactjs','Nodejs','Expressjs','SpringBoot','Tailwind'],
    databasesAndTools:['MySql','Mongodb','Git','Github','JavaSwing','PostMan'],
    CoreCs:['DBMS','OS','CN','OOPS']
  }
  return (
    <div>

      <div className=' text-purple-400'> {`<>`} Technical skills</div>


      <div className=' flex flex-col gap-4 mt-4'>
        <div>
          <div className=' text-yellow-300'>
            Languages
          </div>
          <div className=' flex gap-3'>
          {
            skills.languages.map( (language)=>(

              <div className=' glow-text-green'>
                {language}
              </div>
            ) )
          }
          </div>
        </div>

        <div>

          <div className=' text-yellow-300'> Libraries & Frameworks </div>
          <div className=' flex gap-3'> 
            {
              skills.librariesAndframeworks.map( ( libraryOrFramework )=>(

                <div className=' glow-text-electric-blue'>

                  {libraryOrFramework}
                </div>
              ) )
            }  
          </div>
        </div>

        <div>

          <div className=' text-yellow-300'>
            Databases & Tools
          </div>
          <div className=' flex gap-3'>
            {
              skills.databasesAndTools.map( (databaseOrtool)=>(
                
                <div className=' glow-text '>

                  {databaseOrtool}
                </div>

              ) )
            }
          </div>
        </div>

        <div>

          <div className=' text-yellow-300'>
            CoreCs
          </div>
          <div className=' flex gap-3'>
            {
              skills.CoreCs.map( (subject)=>(
                
                <div className=' glow-text-white '>

                  {subject}
                </div>

              ) )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsCommand