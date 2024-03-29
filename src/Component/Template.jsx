import React from 'react'
import Frame from "../assets/frame.png"
import LoginFrom from './LoginFrom'
import SignupFrom from "./SignupFrom"
import { FcGoogle } from "react-icons/fc"
export default function Template({ title, desc1, desc2, Fromtype, image, setIsLogin }) {
    // console.log(title, "\n", desc1, "\n", desc2, "\n", Fromtype, "\n", image);
    return (
        <div className='flex  justify-evenly w-11/12 max-w-[52.625rem] py-8 mx-auto gap-y-0 gap-x-20'>
            <div className='w-11/12 max-w-[28.125rem] mx-0'>
                <h1 className='text-richblack-5 font-semibold text-[1.2rem] leading-[1.5rem]'>{title}</h1>
                <p className='text-[1rem] leading-[1rem] mt-3'>
                    <span className='text-richblack-100'>{desc1}</span> <br />
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>
                {
                    Fromtype === "Login" ? (<LoginFrom setIsLogin={setIsLogin} />) : (<SignupFrom setIsLogin={setIsLogin} />)
                }
                <div className='flex w-full items-center my-1 gap-x-2'>
                    <div className='h-[1px] bg-richblack-700 w-full'></div>
                    <p className='text-richblack-700 font-medium leading-[1.375rem '>OR</p>
                    <div className='h-[1px] w-full bg-richblack-700'></div>
                </div>
                <button className='flex w-full justify-center items-center rounded-[0.5rem] font-medium text-richblack-100 border border-richblack-700 px-[0.75rem] py-[0.5rem] gap-x-2 mt-'>
                    <FcGoogle />
                    <p>SignUp With Google</p></button>
            </div>
            <div className='relative w-11/12 max-w-[28.125]'>
                <img src={Frame} alt="" width={500} height={450} loading="lazy" className='mt-[1rem]' />
                <img src={image} alt="" width={500} height={450} loading="lazy" className='absolute top-[0.5rem] right-4' />
            </div>
        </div>
    )
}
