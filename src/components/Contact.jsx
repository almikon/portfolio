import React from 'react'
import '../css/contact.css'
import Email from '../img/email.png'
import Phone from '../img/phone.png'
import { useContext } from 'react'
import { ThemeContext } from './context'

function Contact() {    
    const theme = useContext(ThemeContext)
    const sendMail = () => {
        const mailAdress = "aold88@gmail.com"
        const subject = encodeURIComponent(document.getElementById('subject').value)
        const body = encodeURIComponent(document.getElementById('user_text').value)
        const  link= `mailto:${mailAdress}?subject=${subject}&body=${body}`
        window.location.href = link;
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendMail();
    }


  return (
    <div className='contac'>
        <div className="contact__wrapper">
            <div className="contact__left">
                <div className="info">
                    <div className="info__title"><h1>Contact me</h1></div>
                    <div className="info__item">
                        <img src={Phone} alt="" className="info__img" />+7 999 010 11 00
                    </div>
                    <div className="info__item" onClick={sendMail}>
                        <img src={Email} alt="" className="info__img" />aold88@gmail.com
                    </div>
                </div>
            </div>
            <div className="contact__right">
                <div className="contact__desc">
                    <b>What's your story?</b>
                    <p>Feel free to send me any request you have. There are no small or big tasks I wouldn't be interested in. I'm looking forward to participate in your project.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input style={{backgroundColor: theme.state.darkTheme &&"#333"}} type="Subject" name="user_subject" id="subject" placeholder='Subject'/>
                    <textarea style={{backgroundColor: theme.state.darkTheme &&"#333"}} name="message" placeholder='Message' id="user_text" rows="10" maxLength='500' /><br/>
                    <button>Send Request</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact