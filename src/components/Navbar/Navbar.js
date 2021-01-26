import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
const NavBar = () => {
    const showMenuItem = () => {
            const navLink =document.querySelectorAll('#link');
            navLink.forEach((item)=>{
                item.classList.toggle('shownav')
            })
    }

    const width = document.body.clientWidth > 900;
    return (
        <div className="bg_dark">
            <nav className="navBar__main shadow">
                <div className="navBar__first">
                    <img className="bg-light rounded mx-3" src="https://res.cloudinary.com/codecaamp/image/upload/v1610815124/Purple_Modern_Technology_Gaming_Logo_mciavh.png" width="80px" height="80px" alt="" />
                    <a href="https://github.com/pip-pipo">
                    <img className="mx-2" src="https://img.shields.io/github/followers/terrytangyuan.svg?label=GitHub&style=social" alt="" />
                    </a>
                    <a href="https://github.com/pip-pipo">
                    <img src="https://img.shields.io/twitter/follow/TerryTangYuan?label=Twitter&style=social" alt="Twitter" />
                    </a>
                </div>
                <div className="navBar__middle">
                    <ul>
                        <NavLink className="navLink" id="link" to="/login">Log In</NavLink>
                        <NavLink className="navLink" id="link" to="/signup">Sign Up</NavLink>
                {
                    width ?'':<h2 className="menu text-light"><AiOutlineMenu onClick={showMenuItem} /></h2>
                }   
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
