import React from 'react'
import '../css/project.css'

function Project({ img, link, desc }) {
  return (
    <div className='project'>
      <div className="project__browser">
        <div className="p-circle"> </div>
        <div className="p-circle"> </div>
        <div className="p-circle"> </div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className='project__img' />
      </a>
      
    </div>
  )
}

export default Project