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
                    <div className="info__item">
                        <img src={Phone} alt="" className="info__img" />+7 999 010 11 00
                    </div>
                    <div className="info__item">
                        <img src={Email} alt="" className="info__img" />super@freelancer.com
                    </div>
                </div>
            </div>
            <div className="contact__right"></div>
        </div>
    </div>
  )
}

export default Contact