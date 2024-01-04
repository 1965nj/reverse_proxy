import React, { useState } from 'react'
import "./login.css"
//import { IoIosDocument } from "react-icons/io";

const Login = () => {
    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 10000)
    }
    return (
        <div className='cover'>
            <h1 className='te'>Login</h1>

            <input type="text" placeholder='username' />
            <input type="text" placeholder='password' />


            <div className='login-btn' onClick={popup}>start a tunnel</div>
            <p className='text'>or login using</p>
            <div className='alt-login'>

            </div>
            <div className={popupStyle}>
                <h2 className=''>Try connect</h2>
                <select>
                    <option value="option1">Start a tunnel from command line</option>
                    <option value="option2">Start a tunnel from a config file</option>
                    <option value="option3">Start a tunnel with a Docker container</option>
                </select>
                <p>Copy and paste the following into your terminal</p>
                <pre>tunnel tunnel.com</pre>
            </div>
        </div>
    )
}

export default Login