import React from 'react'
import "./LoginSignup.css"

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
 import password_icon from '../Assets/password.png'

const LoginSignup = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">SignUp</div>
            <div className="under-line">/</div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt=""/>
                <input Type="text"/>
            </div>
            <div className="input">
                <img src={email_icon} alt=""/>
                <input Type="email"/>
            </div>
            <div className="input">
                <img src={password_icon} alt=""/>
                <input Type="password"/>
            </div>
        </div>
  
    </div>
  )
}

export default LoginSignup
