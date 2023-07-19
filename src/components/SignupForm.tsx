"use client"
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';



const SignupForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const logo="http://localhost:3000/logo.jpg"
  

  const handleSubmit = () => {
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="rounded-lg shadow-lg p-6 bg-white">
      <div className="flex justify-center">
          <Image src={logo} alt="logo" width={300} height={400} />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Create Your Account</h1>
        </div>
        <input
          type="text"
          required
          placeholder="Enter Your Name"
          className="w-full border-2 border-lime-300 px-4 py-2 mb-4 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Enter Mobile Number"
          className="w-full border-2 border-lime-300 px-4 py-2 mb-4 rounded-md"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Enter Email"
          className="w-full border-2 border-lime-300  px-4 py-2 mb-4 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Enter Your Password"
          className="w-full border-2 border-lime-300 px-4 py-2 mb-4 rounded-md"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <ul className="list-disc mb-4 text-gray-600 p-3">
          <li>6 characters minimum</li>
          <li>At least one number</li>
          <li>Upper & lowercase character</li>
        </ul>
        <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white rounded-md py-2 px-4 w-md font-bold mb-4 "
          onClick={handleSubmit}
        >
          Create Account
        </button>
        </div>
        <div className="text-center text-gray-600">
          Already a member?{' '}
          <Link href="/login" className="font-medium text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};



export default SignupForm;