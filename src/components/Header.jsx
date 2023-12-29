import React from 'react';
import logo from '../logo.svg';

function Header() {
  return (
    <div id='main'>
        <div className='header-heading'>

            <h2>WELCOME TO</h2>
            <h1>OUR REVERSE PROXY</h1>
            <p className='details'> Test integration of your API in local with our app </p>
            
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='header-btns'>
                <a href='Login' className='header-btn'> JOIN US</a>
                
            </div>
            <div><footer className="footer-btn">@CopyRight 4GI 2025 </footer></div>
        
    </div>
  )
}

export default Header