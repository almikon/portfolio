import React from 'react'
import '../css/toggle.css'
import Sun from '../img/sun.png'
import Moon from '../img/moon.png'
import { useContext } from 'react'
import { ThemeContext } from './context'


function Toggle() {
    const theme = useContext(ThemeContext)

    const toggleClick = () =>{
        theme.dispatch({type:'TOGGLE-THEME'});

    }
  return (
    <div className='toggle'>
        <img src={Sun} alt="" className="toggle__icon" />
        <img src={Moon} alt="" className="toggle__icon" />

        <button className="toggle__button" onClick={toggleClick} style={{left: theme.state.darkTheme ? "0" : "25px"}}>

        </button>
    </div>
  )
}

export default Toggle