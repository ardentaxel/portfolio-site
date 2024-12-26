import React from 'react'
import './ProgressBarStyle.css'

const ProgressBar = ({skill, skillLevel}) => {
    const bars = []
    for(let i = 0; i < skillLevel; i++) {
        bars.push(<div key={i} className="bar"></div>)
    }
  return (
    <div className='skill-container'>
        {skill}
        <div className="progress">
            <div class="track">
                {bars}
            </div>
        </div>
    </div>
  )
}

export default ProgressBar;
