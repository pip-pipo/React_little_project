import React from 'react'
import './user.css'
import { RiTwitterFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { useHistory } from 'react-router-dom'
import Firebase from '../../Services/firebase'
const User = () => {
    const history = useHistory()
    const Logouthandler = () => {
        Firebase.auth().signOut().then(() => history.push('/')).catch(err => err)
    }
    return (
        <div className="text-light user">
            <div className="user__button">
                <button onClick={Logouthandler} className="user__post__button">Logout</button>
                <button className="user__post__button">Write Post</button>
            </div>
            <div className="user__first">
                <img src="https://avatars.githubusercontent.com/u/69667157?s=460&u=b3c95f91be2b4fdbd1ea91cc18ec796fd64268af&v=4" alt="" />
                <h4>Md Morsalin</h4>
            </div>
            <div className="user__middle">
                <ul>
                    <li><RiTwitterFill fontSize="40px" /></li>
                    <li><FaInstagramSquare fontSize="40px" /></li>
                    <li><AiFillGithub fontSize="40px" /></li>
                    <li><AiFillFacebook fontSize="40px" /></li>
                </ul>
            </div>
            <div className="user__last">

            </div>
        </div>
    )
}

export default User
