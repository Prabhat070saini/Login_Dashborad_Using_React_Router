import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from "react-hot-toast"
export default function LoginFrom({ setIsLogin }) {
    const [FormData, setFromData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [showPassword, setshowPassword] = useState(false);
    let ChangeHandler = (event) => {
        setFromData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }
    let Sumbithandler = (event) => {
        console.log(FormData);
        event.preventDefault();
        setIsLogin(true);
        toast.success("Login");
        navigate("/Dashboard");
    }
    return (
        <div>
            <form onSubmit={Sumbithandler} className='flex flex-col w-full  gap-y-4 mt-3' >
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email <sup className='text-pink-200'>*</sup></p>
                    <input required type="email"
                        placeholder='abc@gmail.com'
                        name='email'
                        onChange={ChangeHandler}
                        value={FormData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[0.5rem]' />
                </label>
                <label className='w-full relative' >
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
                    <input required type={showPassword ? ("text") : ("Password")}
                        placeholder='Enter your password'
                        name='password'
                        onChange={ChangeHandler}
                        value={FormData.password} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[0.5rem]' />
                    <button onClick={() => setshowPassword(!showPassword)}
                        className='absolute right-3 top-[2.25rem] cursor-pointer'>
                        {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                    </button>
                    <Link to="#"> <p className='text-xs mt-1 text-blue-100 max-w-max  ml-auto '> Forgot Password</p></Link>
                </label>
                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-700 px-[12px] py-[0.5rem]'>Sign In</button>
            </form>
        </div>
    )
}

