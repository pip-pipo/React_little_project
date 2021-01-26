import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Signup.css'
import Firebase from '../Services/firebase'
const SignUp = () => {
    const history = useHistory()
    const [value, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const [err, setErr] = useState('')

    const { name, email, password, password2 } = value;

    const inputHandle = (e) => {
        setValues({ ...value, [e.target.name]: e.target.value })
    }
    const submitHandle = (e) => {
        e.preventDefault();
        const emailValue = email;
        const passwordValue = password;
        const passwrod2Value = password2;


        if (emailValue.length !== 0) {
            if (emailValue.length <= 6) {
                setErr('email is too short')
                setTimeout(() => {
                    setErr('')
                }, 1000)
            } else {
                if (passwordValue.length !== 0) {
                    if (passwordValue !== passwrod2Value) {
                        setErr('Password should be match')
                        setTimeout(() => {
                            setErr('')
                        }, 1000)
                        

                    } else {
                        if (passwordValue.length < 6) {
                            setErr('Password must be atleast 6 char')
                            setTimeout(() => {
                                setErr('')
                            }, 1000)
                        } else {

                            Firebase.auth().createUserWithEmailAndPassword(email, password).then(() => history.push('/login')).catch(()=>(setErr("oop's  please try again ")))

                        }
                    }
                } else {
                    setErr('please fill the password')
                    setTimeout(() => {
                        setErr('')
                    }, 1000)
                }
            }
        } else {
            setErr('please fill all values')
            setTimeout(() => {
                setErr('')
            }, 1000)
        }
    }

    return (
        <div className="App">
            <form action="" onSubmit={submitHandle} className=" shadow p-5 rounded bg_dark_signup" noValidate>
                <h3 className="text-center text-light">Sign Up</h3>
                <h6 className="text-danger" id="error"> {err ? err : ''} </h6>
                <div className="form-group">
                    <input value={name} onChange={inputHandle} name="name" placeholder="Name" type="text" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input vlaue={email} onChange={inputHandle} name="email" placeholder="Email" type="email" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input vlaue={password} onChange={inputHandle} name="password" placeholder="Password" type="password" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input vlaue={password2} onChange={inputHandle} name="password2" placeholder="Confirm Password" type="password" className="form-control shadow-none" />
                </div>
                <button className="btn btn-outline-light shadow-none">Submit</button>
                <h6 className="mt-3 text-light">Already have an account? <Link to='/'>Log In</Link> </h6>
            </form>
        </div>
    )
}

export default SignUp
