import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

const Login = () => {

  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <div>
        <LoginForm />
        <SignUpForm /> 
      </div>
    </div>
  )
}

export default Login;