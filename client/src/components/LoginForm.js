import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/user';
import { setLoginError } from '../redux/error';

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const error = useSelector((state) => state.error.loginError);


    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, password
            })
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    dispatch(updateUser(user))
                    dispatch(setLoginError(null));
                    navigate('/')
                });
            } else {
                r.json().then((errors) => {
                    dispatch(setLoginError(errors.errors))
                    setUsername('');
                    setPassword('');
                })
            }
        })  
    }

  return (
    <div className = 'login-signup-form' onSubmit = {handleSubmit}>
        <form>
            <input 
                type="text" 
                name="username" 
                placeholder='Username'
                value={username} 
                onChange = {(e) => setUsername(e.target.value)} 
            /> <br></br>
            <input 
                type="password" 
                name="password" 
                placeholder='Password'
                value={password} 
                onChange = {(e) => setPassword(e.target.value)}
            /> <br></br>
            <input type="submit" value="Log In"/>
        </form>
        {error?.map((err) => (
                <li key={err}>
                    {err}
                </li>
            ))}
    </div>
  )
}

export default LoginForm;
