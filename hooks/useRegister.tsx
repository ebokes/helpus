import axios from 'axios'
import React, { useState } from 'react'

const useRegister = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errMsg, setErrMsg] = useState("");
    const [isLoading, setIsLoading] = useState("");
  
    const REGISTER_URL = 'https://helpus-xdqm.onrender.com/api/Auth/register';
    const register = async ( fullName: string, email: string, password: string, confirmPassword: string) => {
    //   e.preventDefault();
      console.log(email, fullName,)
      try {
        const response = await axios.post(REGISTER_URL,
          
          {
            email: email,
            password: password,
            fullName: fullName,
            confirmPassword: confirmPassword,
          },
          
        );
        console.log("Signup successful:", response.data);
        
      } catch (error) {
        console.error("Signup error:", error);
        // Handle error, such as displaying an error message
      }
      // await signup(firstName, lastName, gender, email, password, confirmPassword);
    };
    return { register, isLoading, errMsg,  };
}

export default useRegister
