// app/components/AuthPanel.tsx
"use client";

import React, { JSX, useEffect, useState } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import { AtSymbolIcon, LockClosedIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Alert from "../components/Alert";


type FromData={
  Name : string;
  Email: string;
  Password : string;
  PasswordCheck : string;
}

export default function AuthPanel(): JSX.Element {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [Modal, setModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Typed transition to satisfy framer-motion TypeScript types
  const panelTransition: Transition = { type: "tween", duration: 0.42, ease: [0.2, 0.8, 0.2, 1] };

  const contentVariants = {
    initial: (dir = 1) => ({ opacity: 0, x: 30 * dir, y: 10 * dir }),
    enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.32 } },
    exit: (dir = 1) => ({ opacity: 0, x: -30 * dir, y: -10 * dir, transition: { duration: 0.24 } }),
  };

  const leftWidth = isSignUp ? "40%" : "60%";
  const rightWidth = isSignUp ? "60%" : "40%";


  const [Data, setData] = useState<FromData>({
    Name : "",
    Email: "",
    Password : "",
    PasswordCheck : "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;

    setData((prev)=> {
      const next = {...prev, [name]: value};
      return next
    })

  }

  const registerAccount =() => {

    if (Data.Name === "") {
      setErrorMsg("Name is Empty!");
      setModal(true);
    } else if (Data.Email === "") {
      setErrorMsg("Email is Empty!");
      setModal(true);
    } else if (!Data.Email.includes("@")) {
      setErrorMsg("Wrong Email Format!");
      setModal(true);
    } else if (Data.Password === "") {
      setErrorMsg("Password is Empty!");
      setModal(true);
    } else if (Data.Password !== Data.PasswordCheck) {
      setErrorMsg("Password Not Same!");
      setModal(true);
    } else {
      console.log("Semua data valid:", Data);
    }
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="border-2 border-amber-500 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <motion.div
            layout
            transition={panelTransition}
            animate={isMobile ? {} : { width: leftWidth }}
            className={`relative p-6 flex items-center justify-center ${isMobile ? "w-full" : "min-w-0"}`}
            style={{ minWidth: 0 }}
          >
            <div className="w-full">
              <AnimatePresence mode="wait">
                {!isMobile ? (
                  !isSignUp ? (
                    <motion.div
                      key="signin-desktop"
                      custom={-1}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      variants={contentVariants}
                      className="p-4"
                    >
                      <div className="py-8">
                        <h2 className="text-3xl font-bold mb-2">Sign In to Account</h2>
                        <div className="border-2 w-67 inline-block mb-2"></div>
                        <p className="text-gray-400 my-3">or use your email account</p>

                        <div className="flex flex-col items-center">
                          <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded">
                            <AtSymbolIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input type="text" placeholder="Email" className="text-black bg-gray-100 outline-none text-sm flex-1" />
                          </div>
                          <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded">
                            <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input type="password" placeholder="Password" className="text-black bg-gray-100 outline-none text-sm flex-1" />
                          </div>
                          <div className="flex justify-between w-64 mb-5 text-xs">
                            <label className="flex items-center"><input type="checkbox" className="mr-1" />Remember Me</label>
                            <a href="#" className="hover:underline">Forgot Password?</a>
                          </div>
                          <button className="border-2 border-amber-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-amber-500 hover:text-white">
                            Sign In
                          </button>
                          
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="cta-back-desktop"
                      custom={1}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      variants={contentVariants}
                      className="p-4 text-amber-500"
                    >
                      <h2 className="text-3xl font-semibold mb-2">Welcome Back!</h2>
                      <div className="border-2 w-10 inline-block border-amber-500 mb-2"></div>
                      <p className="text-sm text-gray-600 my-3">Already have an account? Sign in.</p>
                      <button
                        onClick={() => setIsSignUp(false)}
                        className="mt-6 border-2 border-amber-500 rounded-full px-10 py-2 inline-block font-semibold text-amber-500 hover:bg-amber-500 hover:text-white"
                      >
                        Sign In
                      </button>
                    </motion.div>
                  )
                ) : (
                  !isSignUp ? (
                    <motion.div
                      key="signin-mobile"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.28 }}
                      className="p-4"
                    >
                      <div className="py-6">
                        <h2 className="text-2xl font-bold mb-2">Sign In</h2>
                        <p className="text-gray-400 my-2">Use your email account</p>

                        <div className="flex flex-col items-center">
                          <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded">
                            <AtSymbolIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input type="text" placeholder="Email" className="text-black bg-gray-100 outline-none text-sm flex-1" />
                          </div>
                          <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded">
                            <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input type="password" placeholder="Password" className="text-black bg-gray-100 outline-none text-sm flex-1" />
                          </div>
                          <button className="mt-2 border-2 border-amber-500 rounded-full px-10 py-2 inline-block font-semibold hover:bg-amber-500 hover:text-white">
                            Sign In
                          </button>
                          <p className="md:hidden text-gray-400 my-2">OR</p>
                          <button
                            onClick={() => setIsSignUp(true)}
                            className="mt-0 border-2 border-amber-500 rounded-full px-10 py-2 inline-block font-semibold text-white md:hidden hover:bg-amber-500 hover:text-white"
                          >
                            Sign Up
                          </button>
                          
                        </div>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            layout
            transition={panelTransition}
            animate={isMobile ? {} : { width: rightWidth }}
            className={`relative p-6 flex items-center justify-center ${isMobile ? "w-full bg-amber-500 text-white" : "bg-amber-500 text-white min-w-0"}`}
            style={{ minWidth: 0 }}
          >
            <div className="w-full">
              <AnimatePresence mode="wait">
                {!isMobile ? (
                  isSignUp ? (
                    <motion.div
                      key="signup-desktop"
                      custom={-1}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      variants={contentVariants}
                      className="p-4 text-white"
                    >
                      <div className="py-8">
                        <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
                        <div className="border-2 w-30 border-white inline-block mb-2"></div>

                        <div className="flex flex-col items-center">
                          <div className="bg-white w-64 p-2 flex items-center mb-3 rounded">
                            <UserCircleIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input onChange={handleChange} type="text" name="Name" placeholder="Name" className="text-black bg-white outline-none text-sm flex-1" />
                          </div>
                          <div className="bg-white w-64 p-2 flex items-center mb-3 rounded">
                            <AtSymbolIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input onChange={handleChange} type="text" name="Email"  placeholder="Email" className="text-black bg-white outline-none text-sm flex-1" />
                          </div>
                          <div className="bg-white w-64 p-2 flex items-center mb-3 rounded">
                            <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input onChange={handleChange} type="password" name="Password" placeholder="Password" className="text-black bg-white outline-none text-sm flex-1" />
                          </div>
                          <div className="bg-white w-64 p-2 flex items-center mb-3 rounded">
                            <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input onChange={handleChange} type="password" name="PasswordCheck" placeholder="Type Same Password" className="bg-white text-black outline-none text-sm flex-1" />
                          </div>
                          <button onClick={registerAccount} className="mt-2 border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-amber-500 text-white">
                            Register
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="cta-signup-desktop"
                      custom={1}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      variants={contentVariants}
                      className="p-4 text-center"
                    >
                      <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
                      <div className="border-2 w-10 border-white inline-block mb-2"></div>
                      <p className="mb-4">Enter your personal details and start your journey with us</p>
                      <button
                        onClick={() => setIsSignUp(true)}
                        className="mt-4 border-2 border-white rounded-full px-12 py-2 inline-block font-semibold text-white hover:bg-white hover:text-amber-500"
                      >
                        Sign Up
                      </button>
                      
                    </motion.div>
                  )
                ) : (
                  isSignUp ? (
                    <motion.div
                      key="signup-mobile"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.28 }}
                      className="p-4 text-white"
                    >
                      <div className="py-6">
                        <h2 className="text-2xl font-bold mb-2">Create Account</h2>
                        <p className="text-sm mb-3">Enter your details</p>

                        <div className="flex flex-col items-center">
                          <div className="bg-white w-64 p-2 flex items-center mb-3 rounded">
                            <UserCircleIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input type="text" name="Name" placeholder="Name" className="bg-white text-black outline-none text-sm flex-1" />
                          </div>
                          <div className="bg-white w-64 p-2 flex items-center mb-3 rounded">
                            <AtSymbolIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input type="text" placeholder="Email" className="bg-white text-black outline-none text-sm flex-1" />
                          </div>
                          <div className="bg-white w-64 p-2 flex items-center mb-3 rounded">
                            <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input type="password" placeholder="Password" className="bg-white text-black outline-none text-sm flex-1" />
                          </div>
                          <div className="bg-white w-64 p-2 flex items-center mb-3 rounded">
                            <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <input type="password" placeholder="Type Same Password" className="bg-white text-black outline-none text-sm flex-1" />
                          </div>
                          <button className="mt-2 border-2 border-white rounded-full px-10 py-2 inline-block font-semibold hover:bg-white hover:text-amber-500 text-white">
                            Register
                          </button>

                          <button
                            onClick={() => setIsSignUp(false)}
                            className="mt-4 text-amber-200 underline text-sm"
                          >
                            Already have account? Sign In
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Modal Alert */}
      <Alert 
      open={Modal}
      title=""
      msg={errorMsg}
      onClose={() => setModal(false)} 
      
      /> 
     


    </div>

    

  

  );
}


