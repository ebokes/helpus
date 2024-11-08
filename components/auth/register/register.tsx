"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";

// import urls from "@/lib/urls";
import axios from "axios";
// import { signIn } from "next-auth/react";
import { useState } from "react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://helpus-xdqm.onrender.com/api/Auth/register",
        {
          fullName: fullName,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );
      console.log(response);
      // if (response.status === 200) {
      //   signIn("credentials", {
      //     email,
      //     password,
      //     callbackUrl: "/dashboard",
      //   });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthWrapper type={"register"}>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button>submit</button>
      </form>
    </AuthWrapper>
  );
};

export default Register;
