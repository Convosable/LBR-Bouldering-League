import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { setUser } from "./redux/user";

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")

    const dispatch = useDispatch();
    

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => dispatch(setUser(user)));
            } else {
                r.json().then((errors) => setErrors(errors.errors))
            }
        })  
    }

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
        {errors.length > 0 ? (
                <div>
                    {errors.map((error) => (
                        <li key={error}>
                            {error}
                        </li>
                    ))}
                </div>
            ) : null}
    </div>
  )
}

export default LoginForm;
