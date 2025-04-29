import React from 'react'
import "./style/Introduction.css"

const Introduction = () => {
  return (
    <div className="introduction">
        <div className="left">
            <span>Dinner breakfast everyday</span>
            <h1>Healty Diet</h1>
            <h2>Blueberry oatmeal</h2>
            <p>Great offer of healty breakfasts to keep you fit and healty</p>
            <button>Explore</button>
        </div>
        <div className='right'>
          <div className='meal-image'>
            <img src="hm3.png" alt="meal"/>
            <img src="mangoBg.png" alt="mango" className='mango'/>
            <img src="bb.png" alt="blueberry" className='blueberry'/>
          </div>
        </div>
    </div>
  )
}

export default Introduction
