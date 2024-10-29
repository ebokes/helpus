import Image from "next/image";
import React from "react";
import Logo from "../navbar/logo";
import Link from "next/link";

interface AuthWrapperProps {
  children: React.ReactNode;
  type?: "login" | "register";
}

const AuthWrapper = ({ children, type }: AuthWrapperProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-[95%] bg-white shadow-lg rounded-lg flex">
        {/* Left Section: Image */}
        <div className="hidden md:flex w-1/2 p-4 items-center justify-center">
          <Image
            src="/2148789721.jpg"
            alt="Volunteer"
            width={400}
            height={400}
            style={{
              width: "100%",
              borderRadius: "0.5rem",
              objectFit: "cover",
              objectPosition: "55%",
              height: "100%",
            }}
          />
        </div>
        <div className="w-full md:w-1/2 px-4 py-8 md:p-8 flex flex-col justify-center">
          {/* Right Section: Register Form */}
          <div className="text-center mb-6">
            <Logo color="text-black1" />
            {type === "register" ? (
              <>
                <h2 className="text-xl font-semibold mt-2">
                  Create an Account
                </h2>
                <p className="text-gray-500">
                  Join us to start making a difference
                </p>
              </>
            ) : type === "login" ? (
              <>
                <h2 className="text-xl font-semibold mt-2">Welcome Back</h2>
                <p className="text-gray-500">Please Enter Your Details</p>
              </>
            ) : null}
          </div>
          {children}
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              {type === "register" ? (
                <Link href="/login" className="text-green-600 hover:underline">
                  Log In
                </Link>
              ) : type === "login" ? (
                <Link
                  href="/register"
                  className="text-green-600 hover:underline"
                >
                  Sign Up
                </Link>
              ) : null}
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AuthWrapper;
