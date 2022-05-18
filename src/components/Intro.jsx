import React from 'react'
import '../css/intro.css'
import Photo from '../img/photo.png'
import Scroll from '../img/scroll.svg'

function Intro() {
  return (
    <div className="intro">

      <div className="intro__left">
        <div className="intro__left-wrapper">
          <h1 className="intro__name">Web Developer</h1>
          <div className="intro__items">
          <div className="intro__items-wrapper">
            <div className="intro__item">HTML, SCSS, CSS</div>
            <div className="intro__item">Vanilla JS</div>
            <div className="intro__item">React JS</div>
            <div className="intro__item">Firebase</div>
            <div className="intro__item">Node JS</div>
          </div>
          </div>
          <p className="intro__descr">
            Prolific front end web developer. I consistently receive high user experience scores for all web development projects. Passionate about building world class web applications in different buisness areas.
          </p>
          
        </div>
        <img src={Scroll} alt="scroll down" className="intro__scroll" />
      </div>
      <div className="intro__right">
        
      <div className="intro__bg"></div>
        <div className="intro__right-img">
          <img src={Photo} alt='' className="intro__img" />
        </div>
      </div>
    </div>
  )
}

export default Intro