import React from 'react'
import '../css/intro.css'

function Intro() {
  return (
    <div className="intro">

      <div className="intro__left">
        <div className="intro__left-wrapper">
          <h2 className="intro__title">Hello, I'm a</h2>
          <h1 className="intro__name">Junior Web Developer</h1>
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
            Prolific, front end web developer. Consistently receive high user experience scores for all web development projects. Passionate about building world class web applications in different buisness areas.
          </p>
        </div>
      </div>
      <div className="intro__right">right</div>
      <div className="intro__right-wrapper">
        <div className="intro__right-img">
          <img src="../img/photo.png" alt="MEMEMEMMEMEME" className="intro__img" />
        </div>
      </div>

    </div>
  )
}

export default Intro