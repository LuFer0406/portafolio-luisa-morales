import React from 'react'
import { projectData } from '../../data/projects'
import ProjectCard from './project-card';
import './projects.css'

function Projects() {

  const data = projectData;

  return (
    <div className='projects'>
      <label className='section-title'>Proyectos</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project}/>
        })}
      </div>
    </div>
  )
}

export default Projects