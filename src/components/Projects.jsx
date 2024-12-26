import React from 'react'
import '../styles/ProjectsStyles/ProjectsStyles.css';
import ProjectComponent from './ProjectComponent';
import projectData from '../data/project-data.json';

const ProjectsComponent = () => {
  return (
    <div className='projects-container'>
      <h1 className='projects-page-title'>My Projects</h1>
      <div className="projects">
        <ProjectComponent
          className='alt-even'
          title={projectData.portfolio.portfolioTitle}
          tech={projectData.portfolio.portfolioTechnologies}
          desc={projectData.portfolio.portfolioProjectDescription}
          slides={projectData.portfolio.portfolioSlides}
          link="/"
        />
        <ProjectComponent
          className='alt-odd' 
          title={projectData.conway.conwayTitle}
          tech={projectData.conway.conwayTechnologies}
          desc={projectData.conway.conwayProjectDescription}
          slides={projectData.conway.conwaySlides}
          link={projectData.conway.conwayLink}
        />
        <ProjectComponent
          className='alt-odd' 
          title={projectData.smtp.smtpTitle}
          tech={projectData.smtp.smtpTechnologies}
          desc={projectData.smtp.smtpProjectDescription}
          slides={projectData.smtp.smtpSlides}
          link={projectData.smtp.smtpLink}
        />
      </div>
    </div>
  )
}

export default ProjectsComponent
