import React, { useState } from 'react'
import authService from '../Appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import  {Button, Input } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { login } from '../store/authSlice'
import Logo from './Logo.jsx'



function Signup() {
    const naviagte = useNavigate()
    // Used to programmatically navigate users to different routes.
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [showPassword,setShowPassword]=useState(false);

    const togglePasswordButton=()=>{
        setShowPassword(!showPassword);
    }

    const create = async (data) => {
        setError("")
        // first ,Empty out the error 
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(login(userData))
                    // use this to update global state,After login, update user info in Redux store.
                }
                naviagte("/")
                // or else navigates to home
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                {/* for handling the error by printing the message */}
                <form onSubmit={handleSubmit(create)}>
                    <div className="space-y-5">
                        <Input
                            label="FullName "
                            placeholder="Enter Your FullName "
                            {...register("name",{
                                required:true
                            })}
                        />
                        <Input
                            label="Email "
                            placeholder="Enter your email"
                            type="email"
                            // Always use ...(Spread Operator) the value may overwrite in other field perhaps , Go to the react-hook-form Doc
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                                
                            })}
                        />
                        <Input
                        label="password"
                        type="password"
                        onClick={togglePasswordButton}
                        placeholder="Enter your password"
                        {...register("password",{
                            required:true,
                        })}
                        />
                        <Button
                        type="submit"
                        className="w-full hover:bg-blue-800"
                        >Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
