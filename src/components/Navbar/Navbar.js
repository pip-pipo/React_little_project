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
        <div>
            <nav className="navBar__main shadow">
                <div className="navBar__first">
                    <img src="https://res.cloudinary.com/codecaamp/image/upload/v1610815124/Purple_Modern_Technology_Gaming_Logo_mciavh.png" width="80px" height="80px" alt="" />
                    <img src="https://img.shields.io/github/followers/terrytangyuan.svg?label=GitHub&style=social" alt="" />
                    <img src="https://img.shields.io/twitter/follow/TerryTangYuan?label=Twitter&style=social" alt="Twitter" />
                </div>
                <div className="navBar__middle">
                    <ul>
                        <NavLink className="navLink" id="link" to="/home">Home</NavLink>
                        <NavLink className="navLink" id="link" to="/add">Add</NavLink>
                        <NavLink className="navLink" id="link" to="/edit">Edit</NavLink>
                        <NavLink className="navLink" id="link" to="/contact">Contact</NavLink>
                        <NavLink className="navLink" id="link" to="/form">Log In</NavLink>
                        <NavLink className="navLink" id="link" to="/signup">Sign Up</NavLink>
                {
                    width ?'':<h2 className="menu"><AiOutlineMenu onClick={showMenuItem} /></h2>
                }
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
