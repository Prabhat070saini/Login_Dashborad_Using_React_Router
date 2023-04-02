import React from 'react'
import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast"
export default function Navbar(props) {
    let Islogin = props.Islogin;
    let setIsLogin = props.setIsLogin;
    // let IsloginHandler = () => {
    //     // console.log(Islogin);
    //     setIsLogin(!Islogin);
    //     toast.success("Login");
    // }
    let IslogoutinHandler = () => {
        // console.log(Islogin);
        setIsLogin(!Islogin);
        toast.success("Long Out");
    }
    return (
        <div className='flex justify-evenly items-center w-11/12 max-w-[72.625rem] py-4 mx-auto'>
            <div>
                <Link to="/">

                    <img src={Logo} alt="Logo" width={160} height={32} loading='lazy' />
                </Link>
            </div>
            <nav>
                <ul className='flex gap-x-6  text-richblack-100'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className='flex gap-x-4 items-center'>
                {
                    !Islogin && <Link to="/Login"><button className='bg-richblack-800 text-richblack-100 py-[0.5rem] px-[0.75rem] rounded-[0.5rem] border border-richblack-700'>Login</button></Link>
                }
                {
                    !Islogin && <Link to="/Signup"><button className='bg-richblack-800 text-richblack-100 py-[0.5rem] px-[0.75rem] rounded-[0.5rem] border border-richblack-700'>Sign up</button></Link>
                }
                {
                    Islogin && <Link to="/Dashboard"><button className='bg-richblack-800 text-richblack-100 py-[0.5rem] px-[0.75rem] rounded-[0.5rem] border border-richblack-700' >Dashboard</button></Link>
                }
                {
                    Islogin && <Link to="/"><button onClick={IslogoutinHandler} className='bg-richblack-800 text-richblack-100 py-[0.5rem] px-[0.75rem] rounded-[0.5rem] border border-richblack-700'>Long Out</button></Link>
                }
            </div>
        </div>
    )
}
