"use client"
import React from 'react'
import { useLottie } from "lottie-react";
import loginAnimation from "../public/json/animation.json";

const LoginIcon = () => {
    const options = {
      animationData: loginAnimation,
      loop: true,
    };
  
    const { View } = useLottie(options);
  return (
    <div className="w-full  mt-[14rem] flex flex-col items-end justify-end">
    <div className="h-[30rem] w-[30rem]">{View}</div>
    </div>
  )
}

export default LoginIcon