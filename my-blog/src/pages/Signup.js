import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { async } from '@firebase/util';

function Signup() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [conformPwd, setconformPwd] = useState('')
    const [error, seterror] = useState();

    const navigate = useNavigate();

    const eventhandler = (e) => {
        setemail(e.target.value)
    }
    const eventhandler1 = (e) => {
        setpassword(e.target.value)
    }
    const eventhandler2 = (e) => {
        setconformPwd(e.target.value)
    }

    // console.log(typeof (email))
    // console.log(typeof (password))

    const signup = async () => {
        try {
            if (password !== conformPwd) {
                seterror('Password Not Matched');
                return
            }
            // await signInWithEmailAndPassword(getAuth(), "demo@gmail.com", "123456");
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/')
        } catch (e) {
            seterror(e.message);
        }
    }

    return (
        <>
            <div className='container bg-white mt-4 p-4'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 bg-light shadow-lg p-4'>
                        <h2 className='text-success text-center'>Create Account</h2>
                        {error && <p className='error text-danger'>{error}</p>}
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" onChange={eventhandler} placeholder='Enter Your Email' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onChange={eventhandler1} placeholder="Enter Your Password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Conform Password</label>
                            <input type="password" className="form-control" name="password" onChange={eventhandler2} placeholder="Enter Your Conform Password" />
                        </div>
                        <button type="submit" onClick={signup} className="btn btn-primary">Submit</button>
                        <Link to="/login"><p>if you have Account? Create Here</p></Link>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </>
    )
}
export default Signup