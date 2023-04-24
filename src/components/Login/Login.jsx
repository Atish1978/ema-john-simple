import React, { useContext } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const {signIn}=useContext(AuthContext);
    
    const navigate=useNavigate();

    const handleSignIn=event=>{

        event.preventDefault();

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            form.reset();
            navigate('/');
        })
        .catch(error=>{
            console.log(error);
        })


    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' id='email' placeholder='Email' required/>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' id='password' placeholder='Password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p><small>New to Ema-john? <Link to='/signup'>Create New Account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;