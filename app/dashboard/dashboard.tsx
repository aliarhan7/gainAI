import React from 'react'
import Programs from './components/programs'
import Sidebar from './components/Sidebar'
import UpperSection from './components/UpperSection'
import LeftSidebar from './components/LeftSidebar'
import Calendar from './components/Calendar'


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-[#86828260] p-6">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <div className="space-y-6">
          <UpperSection />
          <Programs />
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6 lg:w-[400px]">
          <Calendar />
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard