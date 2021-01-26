import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
const Form = () => {

    return (
        <div>
            <form action="" className="w-100 shadow p-5 rounded bg_dark_signup" noValidate>
                <h3 className="text-center text-light">Login</h3>
                <div className="form-group">
                    <input placeholder="Email" type="email" className="form-control shadow-none" />
                </div>
                <div className="form-group">
                    <input autoComplete="off"  placeholder="Password" type="password" className="form-control shadow-none" />
                </div>
                <button className="btn btn-outline-light shadow-none">Submit</button>
                <h6 className="mt-3 text-light">Already have'nt an account? <Link to='/signup'>Sign Up</Link> </h6>

            </form>
        </div>
    )
}

export default Form
