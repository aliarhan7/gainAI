import React from 'react'

const Programs = () => {
  return (
    <div className="bg-gradient-to-b from-[#3737376e] to-[#3C3C3C6e] rounded-[40px] p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-white text-xl">My Programs</h2>
        <div className="flex bg-[#414141] rounded-[40px] p-1 gap-1">
          {['All', 'Meals', 'Gym'].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-[30px] text-sm ${
                i === 0 ? 'bg-[#3A91B5] text-black' : 'text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {['Split Gaining', '4300 Cal Meal', '2300 Cal Meal'].map((program, i) => (
          <div key={program} className="bg-[#3A91B5] rounded-xl p-4 aspect-square">
            <h3 className="text-white text-lg mb-2">{program} Program</h3>
            <span className="text-white/80 text-sm">Active</span>
          </div>
        ))}
        <button className="border-2 border-dashed border-[#3A91B5] rounded-xl aspect-square flex items-center justify-center hover:bg-white/5 transition-colors">
          <span className="text-white">+ Add Program</span>
        </button>
      </div>
    </div>
  )
}

export default Programs