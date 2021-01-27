import React, { useState,useEffect } from 'react'
import './Welcome.css'
import User from './User/User'
const Welcome = () => {
    // const [users, setUsers] = useState({})

    // useEffect(()=>{
    //     getData('pip-pipo')
    //   },[])

    // const getData = async (url) => {
    //     try {
    //       const data = await fetch("https://api.github.com/users")
    //       .then((value)=>(value.json()))
    //       .then(value=>{setUsers(value);console.log(value)})
          
    
    //     } catch (error) {
    //       console.log("There was an error fetching the data: " + error)
    //     }
    //   }


     

    return (
        <div className="welcome">
            <User />
         
        </div>
    )
}

export default Welcome
