import React from 'react'
import Template from '../Component/Template'
import LoginImz from "../assets/login.png"
export default function Login({ setIsLogin }) {
  return (
    <div className='w-screen bg-richblack-900'>

      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow and beyond"
        desc2="Education is future-proof your career"
        Fromtype="Login"
        image={LoginImz}
        setIsLogin={setIsLogin}
      />
      /

    </div>
  )
}
