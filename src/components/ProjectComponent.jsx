import React from 'react'
import ProjectDisplayCarousel from './ProjectDisplayCarousel';
import TechTab from '../components/TechTab';
import '../styles/ProjectsStyles/ProjectComponentStyles.css';

const ProjectComponent = ({title,tech,desc,slides,className,link}) => {

  const setDesc = () => {
    
  }

  return (
    <div className='project-container'>
      <div className="project-carousel">
          <ProjectDisplayCarousel data={slides} className='carousel'/>
      </div>
      <div className="project-description">
        <a href={link} className='project-title'>{title}</a>
        <div className='techno-tabs'>
           {tech.map((tab,index) => {
             return <TechTab name={tab} key={index}/>
           })}
        </div>
        <div>
          {desc.map((description,index) => {
            return <p className="project-desc" key={index}>{description}</p>
          })}
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className={`project-container ${className}`}>
  //     <div className="project-description-container">
  //       <p className='project-title'>{title}</p>
  //       <div className='techno-tabs'>
  //         {tech.map((tab,index) => {
  //           return <TechTab name={tab} key={index}/>
  //         })}
  //       </div>
  //       {desc.map((description,index) => {
  //         return <p className="project-desc" key={index}>{description}</p>
  //       })}
  //     </div>
  //     <div className="project-carousel">
  //       <ProjectDisplayCarousel data={slides} className='carousel'/>
  //     </div>
  //   </div>
  // )
}

export default ProjectComponent
