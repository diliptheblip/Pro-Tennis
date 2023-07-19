"use client"
import image from "../images/lester-yoIt3Wxe0sI-unsplash.jpg";
//import image1 from "../images/logo.jpg.jpg";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
// import AuthLayout from '../../layouts/AuthLayout';
import Link from "next/link";
//import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import React from "react";
//import {useSession,signIn,signOut} from 'next-auth/react'

//const axios = require("axios");

const SignInForm = () => {
  //const router = useRouter();
  // const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const logo="http://localhost:3000/logo.jpg"
  const google="http://localhost:3000/google.png"
  const backGroundImage="http://localhost:3000/bg.jpg"

  const handlesubmit = () => {};

  return (
    <div className="flex flex-col items-center justify-center  p-4 bg-black">
      <div className="md:w-full sm:w-full xl:w-1/2 bg-white shadow-lg rounded-lg p-2">
        <div className="flex justify-center">
          <Image src={logo} alt="logo" width={300} height={400} />
        </div>
        <div className="text-center mt-4 p-2">
          <h2 className="text-2xl font-bold">Welcome To Pro Tennis Academy</h2>
        </div>
        <div className=" p-3">
          <input
            type="text"
            placeholder="Enter Email"
            className="w-full px-4 p-2 border-2 border-lime-300 rounded-md outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4 p-3">
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full px-4 p-2 border-2 border-lime-300 rounded-md outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4 p-3">
         
          <button
            className="w-full p-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
            // onClick={handleSubmit}
          >
            Sign in
          </button>
         
        </div>
        <div className="flex items-center justify-between mt-4 p-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <span className="text-black">Remember Me</span>
          </div>
          <Link href="/forgotpassword" className="text-blue-500 hover:text-blue-600 font-medium">
            Forgot your password?
          </Link>
          <Link href="/signup" className="text-blue-500 hover:text-blue-600 font-medium">
            Go to sign up
          </Link>
        </div>
        <div className="text-black mt-6 text-center">Or sign in with</div>
        <div className="flex justify-center mt-4 p-3">
          <div className="flex items-center justify-center w-10 h-10 mr-2 bg-blue-600 rounded-full">
            <button 
            //  onClick={handleTwitterSignIn}
             ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg></button>
          </div>
          
          <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded-full">
            <button  
            // onClick={handleFacebookSignIn}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
            </button>
          </div>
          <button
            className="flex items-center justify-center w-10 h-10 ml-2 bg-red-600 rounded-full"
            // onClick={handleGmailSignIn}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)", "transform": ";msFilter:;" }}><path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};



export default SignInForm;
