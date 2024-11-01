import axios from "axios";
import { handleError } from "@/help/ErrorHandller";
import { UserProfileToken } from "@/model/User"; 
const api = 'https://helpus-xdqm.onrender.com/api/';

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "Auth/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
email: string, username: string, password: string, confirmpassword: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "Auth/register", {
      email: email,
      username: username,
      password: password,
      confirmpassword: confirmpassword,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};