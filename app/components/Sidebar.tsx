import React from 'react'

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-[#3737376e] to-[#3C3C3C6e] rounded-[40px] p-6">
      <h3 className="text-white text-xl mb-6">Gaining Plan</h3>
      <div className="w-full bg-[#4B4B4B] rounded-[30px] h-3 mb-4">
        <div className="w-[80%] bg-[#3A91B5] h-full rounded-[20px]"/>
      </div>
      <div className="flex justify-between text-white text-sm">
        <span>65Kg</span>
        <span>78Kg</span>
      </div>
    </div>
  )
}

export default Sidebar
