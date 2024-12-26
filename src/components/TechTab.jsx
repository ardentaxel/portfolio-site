import React from 'react'
import '../styles/AboutStyles/TechTabStyles.css';

const TechTab = ({name}) => {
  return (
    <div className='tab'>
        <p className='tech-name'>{name}</p>
    </div>
  )
}

export default TechTab;
