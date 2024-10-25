import AuthWrapper from "@/components/auth/auth-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input-field";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
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
    </AuthWrapper>
  );
};

export default LoginPage;
