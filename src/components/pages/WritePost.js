import React, { useState} from 'react'
import './WritePost.css'
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link } from 'react-router-dom'
import Firebase from '../Services/firebase'
import { v4 as uuid } from 'uuid'
const WritePost = () => {
    const [values, setValues] = useState({
        title: '',
        tags: '',
        author: '',
        blog: ''
    })
    const { title, tags, author, blog } = values;
    const [err, setErr] = useState('');

    const inputHandle = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })

    }


    const submitHandle = (e) => {
        e.preventDefault();
        if (title.length === 0 || tags.length === 0 || author.length === 0 || blog.length === 0) {
            setErr("Please Fill All Fields");
            setTimeout(() => {
                setErr('')
            }, 1000)
        } else {
            Firebase.firestore().collection('posts').doc(uuid()).set(values)
        }
    }


    return (
        <div className="writePost">
            <div className="writePost__wrapper">
                <div className="writePost__first">
                    <h3>Write a Post</h3>
                </div>
                <div className="writePost__middle">
                    <h4 className="text-danger">{err ? err : ''}</h4>
                    <form >
                        <label htmlFor="file"> <AiOutlineCloudUpload fontSize="30px" />  Uplode Cover Image</label>
                        <input type="file" name="file" id="file" hidden />


                        <input onChange={inputHandle} value={title} type="text" className="form-control my-3" name="title" placeholder="  Title" />
                        <input onChange={inputHandle} value={tags} type="text" className="form-control my-3" name="tags" placeholder="  Related Tags" />
                        <input onChange={inputHandle} value={author} type="text" className="form-control my-3" name="author" placeholder="  Author Name" />
                        <textarea rows={5} cols={5} style={{whiteSpace:"pre-line"}} id="text-area" aria-label="Post Content" spellCheck="false" onChange={inputHandle} value={blog} type="text-area" className="form-control my-3" name="blog" placeholder="  Your Blog" />

                        <button onClick={submitHandle}> <Link style={{ textDecoration: "none" }} to="/blog">Publish</Link> </button>
                        <button  ><Link style={{ textDecoration:"none" }} to="/welcome">Back To Profile</Link> </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WritePost
