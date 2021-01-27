import React,{useState} from 'react'
import './Welcome.css'
import User from './User/User'
const Welcome = () => {
    const [users,setUsers] = useState({})

    const GithubUser = () => {
        const userData = fetch("https://api.github.com/users/pip-pipo/repos")
        .then(response => response.json())
        .then(data => {
            const arr = []
            data.forEach((array) => (
                    arr.push(array)
            ))
            setUsers(arr)
            console.log(arr[0].name);
        })
        .catch(err=>err)
    }

    return (
        <div className="welcome">
            <User />
            <div className="welcome__first">
             
            <button onClick={GithubUser}>Get User</button>

            </div>
        </div>
    )
}

export default Welcome
