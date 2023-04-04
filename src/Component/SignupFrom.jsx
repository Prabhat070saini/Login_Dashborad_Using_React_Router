import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
export default function SignupFrom({ setIsLogin }) {
    const [FormData, setFromData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    });
    const navigate = useNavigate();
    const [showPassword, setshowPassword] = useState(false);
    const [AccountType, setAccountType] = useState("Student");
    let ChangeHandler = (event) => {
        setFromData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }
    let submithandler = (event) => {
        event.preventDefault();
        if (FormData.password !== FormData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLogin(true);
        toast.success("Account Created Successfully");
        // const temp = { ...FormData };
        const FinalData = { ...FormData, AccountType };
        // console.log(FinalData);
        navigate("/Dashboard")
    }
    return (
        <div>
            <div className='flex rounded-full gap-z-1 max-w-max bg-richblack-800 p-1 my-6 '>
                <button onClick={() => setAccountType("Student")}
                    className={`${AccountType === "Student" ? " bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Student
                </button>
                <button onClick={() => setAccountType("Insturctor")}
                    className={`${AccountType === "Insturctor" ? " bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Instuctor
                </button>
            </div>
            <form onSubmit={submithandler} className='gap-y-3'>
                <div className='flex gap-x-3'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                        <input required type="text"

                            placeholder="First Name"
                            onChange={ChangeHandler}
                            value={FormData.FirstName}
                            name="firstName"
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[0.5rem]'
                        />
                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                        <input required type="text"
                            placeholder='Last Name'
                            onChange={ChangeHandler}
                            value={FormData.LastName}
                            name="lastName"
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[0.5rem]'
                        />
                    </label>
                </div >
                <div className='w-full mt-3'>
                    <label >
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email <sup className='text-pink-200'>*</sup></p>
                        <input required type="email"
                            placeholder='abc@gmail.com'
                            name='email'
                            onChange={ChangeHandler}
                            value={FormData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[0.5rem]' />

                    </label>
                </div>

                <div className='flex gap-x-3 mt-3'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
                        <input required type={showPassword ? ("text") : ("Password")}
                            placeholder='Enter Password'
                            name='password'
                            onChange={ChangeHandler}
                            value={FormData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[0.5rem]' />
                        <button onClick={() => setshowPassword(!showPassword)}
                            className='absolute right-3 top-[2.5rem] cursor-pointer'
                        >
                            {showPassword ? (<AiOutlineEye fontSize={16} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={16} fill='#AFB2BF' />)}
                        </button>

                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
                        <input required type="Password"
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            onChange={ChangeHandler}
                            value={FormData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[0.5rem]'
                        />
                    </label>
                </div>
                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-700 px-[12px] py-[0.5rem] mt-5'>Create Account</button>
            </form>
        </div >
    )
}
