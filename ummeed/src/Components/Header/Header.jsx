import React from 'react'
// import {Link, useNavigate} from 'react-router-dom'
import '../Header/Header.css'
import { Link } from 'react-router-dom'
import UmeedLogo from '../Header/UmeedLogo.png'
import ProfilePic from '../Header/ProfilePic.png'
export default function Header() {
    return (
        <div className='NavContainer'>
            <div className="UmeedName">
                <img src={UmeedLogo} alt="My Image" />
            </div>
            <div className="NavElements">
                <div className="NavHome">

                    <a className='Home' href='' onClick={() => navigate('/Home')} ><p>Home</p></a>
                </div>
                <div className="NavConnect">
                    <a className='Connect' href='' onClick={() => navigate('/Connect')} ><p>Connect</p></a>
                </div>
                <div className="NavTask">
                    <a className='Task' href='' onClick={() => navigate('/Task')} ><p>Task</p></a>
                </div>
                <div className="NavLogout">
                    <a className='Logout' href='' onClick={() => navigate('/Logout')} ><p>Logout</p></a>
                </div>
            </div>
            <div className="ProfileImg">
                <img src={ProfilePic} alt="My Image" />
            </div>
        </div>
    )
}
