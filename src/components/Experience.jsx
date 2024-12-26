import React from 'react'
import '../styles/ExperienceStyles/ExperienceStyles.css';
import ExperienceCard from './ExperienceCard';

const Experience = () => {

  const tutor_exp = {
    'company': 'University of Johannesburg',
    'location': 'Johannesburg, South Africa',
    'role': 'Calculus Tutor (February 2023 - September 2023)',
    'brief': [
      'Facilitated effective learning as a university calculus tutor for large classes of 60-70 students, all first-years.',
      'Conducted one-on-one consultations to address student queries.',
      'Evaluated and scored assignments, underscoring meticulous attention to detail and accuracy',
      'Offered constructive insights and feedback to faculty regarding any and all difficulties faced by students.'
    ]
  }

  const intern_exp = {
    'company': 'Mukuru Africa',
    'location': 'Johannesburg, South Africa',
    'role': 'Software Intern (July 2023)',
    'brief': [
      'Collaborated in a 5-person team to digitize an existing system, eliminating paper usage.',
      'Developed and presented application-centric solutions for paperless transition.',
      'Innovated a virtual ticketing system to efficiently reduce queuing times',
      'Proposed ideas to enhance customer satisfaction through improved service models.',
      'Provided insights on utilizing collected data to further optimize queue management and service distribution.'
    ]
  }

  return (
    <div className='experience'>
      <div className="experience-content">
        <h1 className='page-title'>Where have I worked?</h1>
        <div className="exp-cards">
          <ExperienceCard
              className='even'
              company={tutor_exp.company}
              location={tutor_exp.location}
              position={tutor_exp.role}
              roles={tutor_exp.brief}
          />
          <ExperienceCard
              className='odd' id='scroll'
              company={intern_exp.company}
              location={intern_exp.location}
              position={intern_exp.role}
              roles={intern_exp.brief}
          />
        </div>
      </div>
    </div>
  )
}

export default Experience
