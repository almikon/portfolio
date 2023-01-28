import React from 'react'
import '../css/projects.css'

function Project({ img, link, desc }) {
  return (
    <div className='project'>
      <div className="project__browser">
        <div className="p-circle"> </div>
        <div className="p-circle"> </div>
        <div className="p-circle"> </div>
      </div>
      <div className="project_img">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className='project__img' />
        </a>
      </div>
      <div className='description'>
        {desc}
      </div>
    </div>
  )
}

export default Project