import React from 'react'

const UpperSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#3737376e] to-[#3C3C3C6e] rounded-[40px] p-6">
      <h2 className="text-white text-center text-xl mb-8">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Proteins 180g', 'Calories 4328', 'Activity Time 1.5 hour'].map((title, i) => (
          <div key={i} className="bg-gradient-to-b from-[#3737376e] to-[#3C3C3C6e] rounded-[40px] p-6">
            <div className="h-48 bg-gradient-to-b from-[#8979FF4D] to-[#2627231A] rounded-xl mb-4"/>
            <h3 className="text-white text-lg mb-3">{title}</h3>
            <div className="text-[#767585] space-y-2">
              <div className="flex justify-between"><span>Goal</span><span>8000</span></div>
              <div className="flex justify-between"><span>Average</span><span>9500</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpperSection