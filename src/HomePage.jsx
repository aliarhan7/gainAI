import React from 'react'
import Header from './components/Header'
import Introduction from './components/Introduction'
import BackGroundEffect from './components/BackGroundEffect'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="homepage">
        <BackGroundEffect/>
        <Header/>
        <Introduction/>
    </div>
  )
}

export default HomePage
