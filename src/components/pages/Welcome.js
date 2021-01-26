import React from 'react'
import './Welcome.css'
import Firebase from '../Services/firebase'
import { useHistory } from 'react-router-dom'
import User from './User/User'
const Welcome = () => {
    const history = useHistory()
    const Logouthandler = () => {
        Firebase.auth().signOut().then(() => history.push('/login')).catch(err => err)
    }
    return (
        <div className="welcome">
            <User />
            <button onClick={Logouthandler} className="btn btn-light">Logout</button>
        </div>
    )
}

export default Welcome
