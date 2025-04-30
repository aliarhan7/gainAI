import React from 'react'

const Calendar = () => {
  return (
    <div className="bg-[#3A91B5] rounded-[40px] p-6">
      <div className="flex justify-between items-center text-white mb-6">
        <h3 className="text-xl font-bold">October 2025</h3>
        <div className="flex gap-4">
          <button className="text-2xl">&lsaquo;</button>
          <button className="text-2xl">&rsaquo;</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {/* Calendar days would be implemented here */}
        {Array.from({ length: 31 }).map((_, i) => (
          <div key={i} className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar