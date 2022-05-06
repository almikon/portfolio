import React from 'react'
import '../css/projects.css'
import Project from './Project'

function Projects() {
  return (
    <div className='projects'>
      <h1 className="projects__title">Projects</h1>
      <div className="projects__list">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      </div>
    </div>
  )
}

export default Projects