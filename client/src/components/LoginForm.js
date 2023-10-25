import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/user';
import { setLoginError } from '../redux/error';

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
                r.json().then((user) => dispatch(setUser(user)));
            } else {
                r.json().then((errors) => {
                    dispatch(setLoginError(errors.errors))
                })
            }
        })  
    }

    //reminder to clear form if error is hit


  return (
    <div onSubmit = {handleSubmit}>
        <h1>Login:</h1>
        <form>
            <label>Username: </label>
            <input 
                type="text" 
                name="username" 
                value={username} 
                onChange = {(e) => setUsername(e.target.value)} 
            /> <br></br>
            <label>Password: </label>
            <input 
                type="password" 
                name="password" 
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
