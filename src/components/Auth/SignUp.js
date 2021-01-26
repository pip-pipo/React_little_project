import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
const SignUp = () => {
    return (
        <div>
            <form action="" className="w-100 shadow p-5 rounded bg_dark_signup">
                <h3 className="text-center text-light">Sign Up</h3>
                <div className="form-group">
                    <input placeholder="Name" type="text" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input placeholder="Email" type="email" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input placeholder="Password" type="password" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input placeholder="Confirm Password" type="password" className="form-control shadow-none" />
                </div>
                <button className="btn btn-outline-light shadow-none">Submit</button>
                <h6 className="mt-3 text-light">Already have an account? <Link to='/login'>Log In</Link> </h6>
            </form>
        </div>
    )
}

export default SignUp
