import React from 'react'
import '../styles/ExperienceStyles/ExpCardStyles.css'

const ExperienceCard = ({company,location,position,roles,className}) => {
  const rolesToDisplay =[]
  const getRoles = () => {
    for(let i = 0; i < roles.length; i++){
      rolesToDisplay.push(<li>roles[{i}]</li>)
    }
    return rolesToDisplay;
  }

  
  
  return (
    <div className={`exp-card ${className}`}>
      <p className="job-title">{company}: {location}</p>
      <p className="job-role">{position}</p>
      <div className="description">
        <ul className="description-list">
          {roles && roles.map((role,index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard;
