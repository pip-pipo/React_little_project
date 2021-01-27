import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import Firebase from '../Services/firebase'
// css file
import './Form.css'

const Form = () => {
    const history = useHistory()
    const [err, setErr] = useState('')
    // set input value 
    const [value, setValue] = useState({
        email: '',
        password: ''
    });
    // get email,password from value by distractureing
    const { email, password } = value;

    // inputHandel
    const inputHandle = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    // form submit handle
    const submitHandle = (e) => {
        e.preventDefault()
        if (email.length === 0 || password.length === 0) {
            setErr('please fill all fields')
            setTimeout(() => {
                setErr('')
            }, 1000)

        }
        else {
            // regex for email
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // check the email
            if (re.test(String(email).toLowerCase())) {
                // signin use with email and password
                Firebase.auth().signInWithEmailAndPassword(email, password).then(() => { setErr('succesfully account created'); setTimeout(()=>{history.push('/welcome')},1000 ) }).catch((err) =>{setErr('Enter a Valid Email');setTimeout(()=>{setErr('')},1000)})
            } else {
                setErr("Please fill a valid Email")
                setTimeout(() => {
                    setErr('')
                }, 1000)
            }
        }
    }

    return (
        <div className="App">
            <form action="" onSubmit={submitHandle} className="shadow p-5 rounded bg_dark_signup" noValidate>
                <h3 className="text-center text-light">Login</h3>
                <h6 className="text-danger" id="error"> {err ? err : ''} </h6>
                <div className="form-group">
                    <input onChange={inputHandle} name="email" value={email} placeholder="Email" type="email" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input onChange={inputHandle} name="password" value={password} autoComplete="off" placeholder="Password" type="password" className="form-control shadow-none" />
                </div>
                <button className="btn btn-outline-light shadow-none">Submit</button>
                <h6 className="mt-3 text-light">Already have'nt an account? <Link to='/signup'>Sign Up</Link> </h6>

            </form>
        </div>
    )
}

export default Form
