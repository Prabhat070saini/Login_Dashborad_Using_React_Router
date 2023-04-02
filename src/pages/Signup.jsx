import React from 'react'
import Template from '../Component/Template'
import LoginImz from "../assets/signup.png"
export default function Signup({ setIsLogin }) {
  return (
    <div>
      <Template
        title="Login"
        desc1="Login to your account"
        desc2="Please enter your username and password"
        Fromtype="Signup"
        image={LoginImz}
        setIsLogin={setIsLogin}
      />
    </div>
  )
}
