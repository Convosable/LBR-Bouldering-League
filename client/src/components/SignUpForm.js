import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/user';
import { setSignupError } from '../redux/error';

const SignUpForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [email, setEmail] = useState("")
    const [handicap, setHandicap] = useState('')

    const dispatch = useDispatch();
    const error = useSelector((state) => state.error.signupError);


    function handleSignup(e) {
        e.preventDefault()
            fetch('/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user:{
                        username: username,
                        password: password,
                        password_confirmation: passwordConfirmation,
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        handicap: handicap,
                    }
                })
            })
            .then((r) => {
                if (r.ok) {
                    r.json().then((user) => dispatch(updateUser(user)))
                }
                else {
                    r.json().then((errors) => {
                        dispatch(setSignupError(errors.errors))
                    })
                }
            })
    }

    return (
        <div className = 'login-signup-form' >
            <form onSubmit = {handleSignup}>
                <input 
                    type = "text"
                    name = "firstname"
                    placeholder='First Name'
                    value = {firstName}
                    onChange = {(e) => setFirstName(e.target.value)} 
                /> <br></br>
                <input 
                    type = "text"
                    name = "lastname"
                    placeholder='Last Name'
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)} 
                /> <br></br>  
                <input 
                    type = "text" 
                    name = "username" 
                    placeholder='Username'
                    value = {username} 
                    onChange = {(e) => setUsername(e.target.value)} 
                /> <br></br>
                <input 
                    type = "password"
                    name = "password"
                    placeholder='Password'
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)} 
                /> <br></br>
                <input 
                    type = "password"
                    name = "passwordConfirmation"
                    placeholder='Password Confirmation'
                    value = {passwordConfirmation}
                    onChange = {(e) => setPasswordConfirmation(e.target.value)} 
                /> <br></br>
                <input 
                    type = "text"
                    name = "email"
                    placeholder='Email'
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)} 
                /> <br></br>
                <select value = {handicap} onChange = {(e) => setHandicap(e.target.value)}>
                    <option value="" disabled>Select a Handicap</option>
                    {Array.from({ length: 11 }, (i, index) => (
                        <option key={index} value={index}>
                            V{index}
                        </option>
                    ))}
                </select> <br></br>
                <input type="submit" value="Sign Up" />
            </form>
            {error?.map((err) => (
                <li key={err}>
                    {err}
                </li>
            ))}
            
        </div>
    )
}

export default SignUpForm;