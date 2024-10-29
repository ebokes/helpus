"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input-field";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    signIn("google");
    router.push("/dashboard");
  };
  return (
    <AuthWrapper type={"login"}>
      <form>
        <div className="mb-4">
          <Input
            label="Email"
            placeholder="Enter your Email Address"
            type="email"
          />
          <Input
            label="Password"
            placeholder="Enter your Password"
            type="password"
          />
        </div>

        <div className="flex items-center justify-between -mt-6 mb-6">
          <div className="flex items-center">
            {/* <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember For 30 days
            </label> */}
          </div>
          <a href="#" className="text-sm text-green-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        <Button asChild type="submit" variant={"rect"} className="w-full">
          <Link href={"/dashboard"}>Log In</Link>
        </Button>
      </form>

      <div className="flex justify-center w-full my-5">
        <p>or</p>
      </div>

      <div className="flex gap-4">
        <Button variant={"google"} className="w-full" onClick={handleLogin}>
          <Image src="/google.svg" alt="Google Logo" width={20} height={20} />
          <p>Login with Google</p>
        </Button>
      </div>
    </AuthWrapper>
  );
};

export default LoginPage;
