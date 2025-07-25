import React from 'react'

const AchievementsCommand = () => {
  return (
    <div className=' flex flex-col gap-3'>
        <div className=' text-yellow-400'>My achievements</div>
        <ul className=' text-white'>
            <li>🏆 SIH 2023 finalist</li>
            <li>🏅 Hackanova 2024 finalist</li>
            <li>🌟 Hackanova 2023 precursor winner</li>
            <li>🧠 Leetcode 200 days badge 2024</li>
        </ul>
    </div>
  )
}

export default AchievementsCommand