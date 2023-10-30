import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

import logo from '../images/LBR-logo.png'

const Login = () => {

    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    function signUpDisplay() {
        setShowSignUp(true);
        setShowLogin(false);
    }

    function loginDisplay() {
        setShowLogin(true);
        setShowSignUp(false);
    }

    return (
        <div  className = 'login-container'>
            <div className = 'login-header'>
                <img src={logo} alt="LBR Logo" />
                <h2>Bouldering League</h2>
            </div>
            <div>
                { showLogin ? <LoginForm /> : <SignUpForm />}
                { showLogin ? <p>If you don't already have an account, click <button onClick = {signUpDisplay}>here</button> to sign up.</p> : <p>If you already have an account, click <button onClick = {loginDisplay}>here</button> to log in.</p>}
            </div>
        </div>
    )
}

export default Login;