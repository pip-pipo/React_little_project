import React, { useState, useEffect } from 'react'
import './Blog.css'
import Firebase from '../Services/firebase'
import {Link} from 'react-router-dom'
const Blog = () => {
    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        Firebase.firestore().collection('posts').onSnapshot(data => {
            setValue(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            setLoading(false)
        })
    }, [])

    const deleteHandle = (id) => {
        Firebase.firestore().collection('posts').doc(id).delete().catch((err) => err)
    }
   
    return (
        <div className="blog  text-light my-4">
            <div className="blog__first w-50 m-auto ">
                <input  type="text" placeholder="🧐 Search Posts" className="form-control my-3 shadow-none" />

            </div>
            <div className="blog__middle">
                {
                    loading ? <h2>Loading....</h2> : <div>
                        {
                            value.map((getData) => (
                                <div className="blogsData" style={{whiteSpace:"pre-line",wordBreak:"break-word",fontFamily:"monospace"}} >
                                    <h3><span>Title: </span>{getData.title}</h3>
                                    <h5><span>Author: </span>{getData.author}</h5>
                                    <h3 ><span>Blog: </span>{getData.blog}</h3>
                                    <h5 style={{marginTop:'20px'}}><span>Tags: </span>{getData.tags}</h5>
                                    <button style={{outline:"none"}} onClick={() => deleteHandle(getData.id)}>Delete</button>
                                    <button style={{outline:"none"}}><Link to={`/editBlog/${getData.id}`} style={{textDecoration:"none" ,color:"white"}}>Edit</Link></button>
                                 
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>

    )
}

export default Blog
