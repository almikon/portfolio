import React from 'react'
import '../css/contact.css'
import Email from '../img/email.png'
import Phone from '../img/phone.png'
import { useContext } from 'react'
import { ThemeContext } from './context'

function Contact() {    
    const theme = useContext(ThemeContext)

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div className='contact'>
        <div className="contact__background"></div>
        <div className="contact__wrapper">
            <div className="contact__left">
                <div className="info">
                    <div className="info__title"><h1>Contact me:</h1></div>
                    <div className="info__item">
                        <img src={Phone} alt="" className="info__img" />+7 999 010 11 00
                    </div>
                    <div className="info__item">
                        <img src={Email} alt="" className="info__img" />aold88@gmail.com
                    </div>
                </div>
            </div>
            <div className="contact__right">
                <p className="contact__desc">
                    <b>What's your story?</b>
                    <p>Feel free to send me any request you have. There are no small or big tasks I wouldn't be interested in. I'm looking forward to participate in your project.</p>
                </p>
                <form onSubmit={handleSubmit}>
                    <input style={{backgroundColor: theme.state.darkTheme &&"#333"}} type="Name" name="user_name" placeholder='Name'/>
                    <input style={{backgroundColor: theme.state.darkTheme &&"#333"}} type="Subject" name="user_subject" placeholder='Subject'/>
                    <input style={{backgroundColor: theme.state.darkTheme &&"#333"}} type="Email" name="user_email" placeholder='Email'/>
                    <textarea style={{backgroundColor: theme.state.darkTheme &&"#333"}} name="message" placeholder='Message' id="user_text" rows="10" /><br/>
                    <button>Send Request</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact