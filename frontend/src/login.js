import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './loginvalidation';
import axios from 'axios'

function Login(){
        const [values, setValues] = useState({
            email: '',
            password: ''
        })
        const navigate = useNavigate();
        const [errors, setErrors] = useState({})
        const handleInput = (event) =>{
            setValues(prev => ({...prev, [event.target.name]:[event.target.value]}));
        }


        const handleSubmit = (event) =>{
            event.preventDefault();
            setErrors(Validation(values));
            if(errors.email === "" && errors.password === ""){
                axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if(res.data === "Success"){
                        navigate('/Home');
                    } 
                    else 
                    {
                        alert("no data");
                    }
                })
                .catch(err => console.log(err));
            }
        }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='enter email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='enter password' name='password' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-succees w-100 bg-green rounded-0'><strong>Log in</strong></button>
                    <p>No account created yet!!</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>   
                </form>
            </div>
        </div>
    )
}

export default Login