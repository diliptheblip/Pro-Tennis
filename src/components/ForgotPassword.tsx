"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';




const ForgetPassword = () => {
  const [email, setEmail] = useState('');

 

  const logo="http://localhost:3000/logo.jpg"

  return (
    <div className="flex  justify-center  bg-white p-2 ">
      <div className="w-full shadow-lg rounded-lg p-6 ">
        <div className='flex justify-center'>
        <Image src={logo} alt=""  width={150} height={150} />
        </div>

        {/* <div className="text-center font-medium text-2xl text-gray-800 mb-6">Pro Tennis Academy</div> */}
        <div className="text-center text-lg text-gray-800 mb-2 p-3">
          Enter the email associated with your account, and we will send you a link to reset your password.
        </div>

        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="email" className="text-gray-800 p-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            className="w-full py-2 px-4 rounded-lg border-2 border-lime-300  text-gray-800 mb-3 ml-4 mt-0"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='flex justify-center'>
        <button
          className="w-md py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium"
        //   onClick={handleSubmit}
        >
          Continue
        </button>
        </div>
        <div className="mt-6 flex justify-center text-center text-gray-800">
          <div>Don`t have an account?</div>
          <Link href="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};



export default ForgetPassword;