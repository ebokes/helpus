import AuthWrapper from "@/components/auth/auth-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input-field";
import React from "react";

const RegisterPage = () => {
  return (
    <AuthWrapper type={"register"}>
      <form>
        <Input
          label="Full Name"
          placeholder="Enter your Full Name"
          type="text"
        />
        <Input label="Email" placeholder="Enter your Email Address" />
        <Input
          label="Password"
          placeholder="Enter your Password"
          type="password"
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm your Password"
          type="password"
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
        <Button variant={"rect"} type="submit" className="w-full mt-2">
          Sign Up
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default RegisterPage;
