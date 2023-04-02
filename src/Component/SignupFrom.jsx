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
        console.log(FormData);
        navigate("/Dashboard")
    }
    return (
        <div>
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instuctor
                </button>
            </div>
            <form onSubmit={submithandler}>
                <div>
                    <label >
                        <p>First Name <sup>*</sup></p>
                        <input required type="text"

                            placeholder="First Name"
                            onChange={ChangeHandler}
                            value={FormData.FirstName}
                            name="firstName"

                        />
                    </label>
                    <label htmlFor="">
                        <p>Last Name <sup>*</sup></p>
                        <input required type="text"
                            placeholder='Last Name'
                            onChange={ChangeHandler}
                            value={FormData.LastName}
                            name="lastName"
                        />
                    </label>
                </div>
                <label >
                    <p>Email <sup>*</sup></p>
                    <input required type="email"
                        placeholder='abc@gmail.com'
                        name='email'
                        onChange={ChangeHandler}
                        value={FormData.email} />
                </label>
                <div>
                    <label >
                        <p>Password <sup>*</sup></p>
                        <input required type={showPassword ? ("text") : ("Password")}
                            placeholder='Enter your password'
                            name='password'
                            onChange={ChangeHandler}
                            value={FormData.password} />
                        <button onClick={() => setshowPassword(!showPassword)}>
                            {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                        </button>

                    </label>
                    <label htmlFor="">
                        <p>Confirm Password <sup>*</sup></p>
                        <input required type="Password"
                            placeholder='Enter your password'
                            name='confirmPassword'
                            onChange={ChangeHandler}
                            value={FormData.confirmPassword}
                        />
                    </label>
                </div>
                <button>Create Account</button>
            </form>
        </div>
    )
}
