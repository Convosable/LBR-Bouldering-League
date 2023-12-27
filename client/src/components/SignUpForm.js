import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/user';
import { setSignupError } from '../redux/error';
import { setLoginError } from '../redux/error';


const SignUpForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [email, setEmail] = useState("")
    const [handicap, setHandicap] = useState('')
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const error = useSelector((state) => state.error.signupError);

    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }

    function handleSignup(e) {
        e.preventDefault()

        const formData = new FormData();
        formData.append('user[username]', username);
        formData.append('user[password]', password);
        formData.append('user[password_confirmation]', passwordConfirmation);
        formData.append('user[first_name]', firstName);
        formData.append('user[last_name]', lastName);
        formData.append('user[email]', email);
        formData.append('user[handicap]', handicap);
        formData.append('image', image);

        fetch('/signup', {
            method: 'POST',
            body: formData
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    dispatch(setUser(user))
                    dispatch(setSignupError(null))
                    dispatch(setLoginError(null))
                    navigate('/')
                })
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
                <label>Profile Picture:</label>
                <input type="file" accept="image/*" onChange={handleImageChange} />

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