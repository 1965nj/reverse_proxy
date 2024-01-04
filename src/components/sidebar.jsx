import React, { useState } from 'react'
import '../App.css'


import { NavLink } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { FcAbout } from "react-icons/fc";
import { FaReceipt } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoSidebarExpand } from "react-icons/go";

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen]= useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItems = [
        {
            name: 'Home',
            path: '/',
            icon:<FiHome />

        },
        {
            name: 'About',
            path: '/about',
            icon:<FcAbout />
        },
        {
            name: 'Facture',
            path: '/Facture',
            icon:<FaReceipt />
        },
        {
            name: 'Login',
            path: '/Login',
            icon:<IoLogInOutline />
        },
        {
            name: 'Setting',
            path: '/Setting',
            icon:<IoSettingsOutline />
        }

    ]
    return (
        <div className='container'>
            <div style={{width:isOpen ? "300px":"50px"}} className='sidebar'>
                <div className='top_section'>
                    <h1 style={{display:isOpen ? "block":"none"}} className='logo'>Logo</h1>
                    <div style={{marginLeft:isOpen ? "50px":"0px"}} className='bars'>
                    <GoSidebarExpand onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className="Link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display:isOpen ? "block":"none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
            </div>
                <main>{children}</main>
        </div>
    ) ;
};
export default Sidebar