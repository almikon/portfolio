import React from 'react'
import '../css/intro.css'
import Scroll from '../img/scroll.svg'
import Typer from './Typer'

function Intro() {
  return (
    <div className="intro">
          <h1 className="intro__name">Web Developer</h1>
          <div className="intro__items">
          <div className="intro__items-wrapper">
            <div className="intro__item">HTML, SCSS, CSS</div>
            <div className="intro__item">Vanilla JS</div>
            <div className="intro__item">React JS</div>
            <div className="intro__item">Firebase</div>
            <div className="intro__item">Node JS-FEAT</div>
          </div>
          </div>
          <span className="intro__descr">
            I'm a prolific front end web developer. I consistently receive high user experience scores for all web development projects. Passionate about building world class web applications in different buisness areas.
          </span>
        
        <Typer />
        <img src={Scroll} alt="scroll down" className="intro__scroll" />
    </div>
  )
}

export default Intro