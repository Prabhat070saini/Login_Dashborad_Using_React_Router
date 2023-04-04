import React from 'react'
import Template from '../Component/Template'
import LoginImz from "../assets/signup.png"
export default function Signup({ setIsLogin }) {
  return (
    <div className='w-screen bg-richblack-900'>
      <Template
        title="Join the millsion of learning to code with StudyNation for free"
        desc1="Build skills for today, tomorrow and beyond"
        desc2="Education is future-proof your caree"
        Fromtype="Signup"
        image={LoginImz}
        setIsLogin={setIsLogin}
      />
    </div>
  )
}
