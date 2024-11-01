"use client"
import AuthWrapper from "@/components/auth/auth-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input-field";
import Link from "next/link";
import React, {useState} from "react";
import axios from "axios";
import useRegister from "@/hooks/useRegister";

interface Props{
  fullName: string, 
  email: string, 
  password: string, 
  confirmPassword: string
}


const RegisterPage = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const {register, isLoading, errMsg} = useRegister()

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await register(fullName, email, password, confirmPassword);
  };
  return (
    <AuthWrapper type={"register"}>
      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          placeholder="Enter your Full Name"
          type="text"
          onChange={(e) => setFullName(e.target.value)}
         value={fullName}
        />
        <Input 
        label="Email" 
        placeholder="Enter your Email Address" 
        onChange={(e) => setEmail(e.target.value)}
         value={email}
        />
        <Input
          label="Password"
          placeholder="Enter your Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
         value={password}
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm your Password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
         value={confirmPassword}
        />

        {/* Accept Terms Checkbox */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-green-600 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            I agree to the terms and conditions
          </label>
        </div>

        {/* Sign Up Button */}

        <Button  type="submit" variant={"rect"} className="w-full">
        Sign Up
          {/* <Link href={"/dashboard"}>Sign Up</Link> */}
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default RegisterPage;
