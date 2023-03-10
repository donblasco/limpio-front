//import React from "react";
import { Link } from 'react-router-dom';

const Register = () => {
    return(
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
               Sign in
            </h1>
            <form className="mt-6">
                <div className="mb-2">
                    <label
                        for="Name"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                <div className="flex">
                    <span className='text-red-400 text-sm m-2 p-2'>error</span>  
                </div>  
                </div>
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="emailaddress@example.com"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                <div className="flex">
                    <span className='text-red-400 text-sm m-2 p-2'>error</span>  
                </div>  
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password confrmation"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password Confirmation
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="flex">
                    <span className='text-red-400 text-sm m-2 p-2'>error</span>  
                </div> 
                <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Register
                    </button>
                </div>
            </form>
            <Link to="/forgot-password"
                className='mb-2 inline-block text-base - text-[#adadad]'>
            </Link>
        </div>
    </div>
    )
}

export default Register;