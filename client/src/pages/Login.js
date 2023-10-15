import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm'

const Login = () => {

  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <div>
        <SignUpForm /> 
      </div>
    </div>
  )
}

export default Login;