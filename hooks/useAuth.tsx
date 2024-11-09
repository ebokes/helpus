import urls from "@/lib/urls";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  // const [errMsg, setErrMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const LOGIN_URL = urls.login;
  const login = async (email: string, password: string) => {
    //   e.preventDefault();
    console.log(email);
    setIsLoading(true);
    try {
      const response = await axios.post(
        LOGIN_URL,

        {
          email: email,
          password: password,
        }
      );
      router.push("/dashboard");
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup error:", error);
      // setErrMsg(response.data)
      // Handle error, such as displaying an error message
    } finally {
      setIsLoading(false);
    }
    // await signup(firstName, lastName, gender, email, password, confirmPassword);
  };
  return { login, isLoading };
};
export const useRegister = () => {
  // const [errMsg, setErrMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const REGISTER_URL = "https://helpus-xdqm.onrender.com/api/Auth/register";
  const register = async (
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    //   e.preventDefault();
    console.log(email, fullName);
    setIsLoading(true);
    try {
      const response = await axios.post(
        REGISTER_URL,

        {
          email: email,
          password: password,
          fullName: fullName,
          confirmPassword: confirmPassword,
        }
      );
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup error:", error);
      // setErrMsg(response.data)
      // Handle error, such as displaying an error message
    } finally {
      setIsLoading(false);
    }
    // await signup(firstName, lastName, gender, email, password, confirmPassword);
  };
  return { register, isLoading };
};
