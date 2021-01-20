import React, { useState } from 'react'
import Firebase from './firebase'
const Home = () => {
    const [item, setItem] = useState({
        title: '',
        sub: '',
        com: ''
    })
    const { title, sub, com } = item
    const IputClickHandle = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
        console.log(e.target.value);
    }
    const createComment = () => {
        const data = {
            title: title,
            sub: sub,
            com: com,
        }
        let ref = Firebase.database().ref('/');
        ref.set(data)

    }


    return (
        <div>
            <h3>Post A Comment</h3>
            <input placeholder="enter your name" className="form-control my-2 shadow-none" name={title} type="text" onClick={e=> IputClickHandle(e)} />
            <input placeholder="enter your subject" className="form-control my-2 shadow-none" name={sub} type="text" onClick={e=> IputClickHandle(e)} />
            <input placeholder="enter your comment" className="form-control my-2 shadow-none" name={com} type="text" onClick={e=> IputClickHandle(e)} />
            <button onClick={createComment} className="btn my-2 btn-outline-dark shadow-none">Submit</button>
        </div>
    )
}

export default Home
