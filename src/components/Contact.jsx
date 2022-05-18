import React from 'react'
import '../css/contact.css'
import Email from '../img/email.png'
import Phone from '../img/phone.png'

function Contact() {
  return (
    <div className='contact'>
        <div className="contact__background"></div>
        <div className="contact__wrapper">
            <div className="contact__left">
                <div className="info">
                    <h1>Contact me:</h1>
                    <div className="info__item">
                        <img src={Phone} alt="" className="info__img" />+7 999 010 11 00
                    </div>
                    <div className="info__item">
                        <img src={Email} alt="" className="info__img" />super@freelancer.com
                    </div>
                </div>
            </div>
            <div className="contact__right">
                <p className="contact__desc">
                    <b>What's your story?</b>
                    Feel free to send me any request you have. There are no small or big tasks I wouldn't be interested in. I'm looking forward to participate in your project.
                </p>
                <form action="submit">
                    <input type="Name" name="user_name" placeholder='Name'/>
                    <input type="Subject" name="user_subject" placeholder='Subject'/>
                    <input type="Email" name="user_email" placeholder='Email'/>
                    <textarea name="user_text" placeholder='Message' id="user_text" rows="10" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact