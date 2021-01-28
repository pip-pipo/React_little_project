import React, { useState, useEffect } from 'react'
import './Blog.css'
import Firebase from '../Services/firebase'

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
    const editHandle = (id) => {
        // Firebase.firestore().collection('posts').doc(id).set()
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
                                <div className="blogsData">
                                    <h3><span>Title: </span>{getData.title}</h3>
                                    <h5><span>Author: </span>{getData.author}</h5>
                                    <h4><span>Blog: </span>{getData.blog}</h4>
                                    <p><span>Tags: </span>{getData.tags}</p>
                                    <button style={{outline:"none"}} onClick={() => deleteHandle(getData.id)}>Delete</button>
                                    <button style={{outline:"none"}} onClick={() => editHandle(getData.id)}>Edit</button>
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
