import React from 'react'
import '../css/projects.css'
import Project from './Project'
import { projects_items } from './data'

function Projects() {
  return (
    <div className='projects'>
      <h2 className="projects__title">Completed Projects</h2>
      <div className="projects__list">
        {projects_items.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} desc={item.desc} />
        ))}
      </div>

    </div>
  )
}

export default Projects