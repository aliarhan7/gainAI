import React from 'react'

const LeftSidebar = () => {
  return (
    <div className="flex flex-col gap-6 p-4 bg-gradient-to-b from-[#3737376e] to-[#3C3C3C6e] rounded-[40px]">
      {['house', 'calendar', 'chart', 'settings', 'notification'].map((icon, i) => (
        <button 
          key={icon}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            i === 0 ? 'bg-[#3A91B5]' : 'bg-[#353531] hover:bg-[#3A91B5] transition-colors'
          }`}
        >
          {/* Add icons here */}
          <span className="text-white text-lg">{icon[0].toUpperCase()}</span>
        </button>
      ))}
    </div>
  )
}

export default LeftSidebar