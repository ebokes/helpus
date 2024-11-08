// import { signIn } from "next-auth/react";
// import { useContext, createContext, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// interface AuthContextProps {
//   token: string;
//   user: any;
//   loginAction: (data: any) => void;
//   logOut: () => void;
// }

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("site") || "");
//   const [loading, setLoading] = useState(false);
//   const [gloading, setGLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [data, setData] = useState([]);
//   //   const navigate = useNavigate();
//   const loginAction = async (data) => {
//     // try {
//     //   const response = await fetch("your-api-endpoint/auth/login", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(data),
//     //   });
//     //   const res = await response.json();
//     //   if (res.data) {
//     //     setUser(res.data.user);
//     //     setToken(res.token);
//     //     localStorage.setItem("site", res.token);
//     //     navigate("/dashboard");
//     //     return;
//     //   }
//     //   throw new Error(res.message);
//     // } catch (err) {
//     //   console.error(err);
//     // }

//     setLoading(true);
//     setError(null);
//     try {
//       const response = await signIn("credentials", {
//         email,
//         password,
//         // callbackUrl: "/dashboard", // Redirect after successful login
//       });
//       // if (response?.user?.isSuccessful)
//       //   toast.success("Login successful");
//       console.log(response);
//       if (response?.error) {
//         setError("Login failed. Please check your credentials and try again.");
//       }
//     } catch {
//       setError("An unexpected error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logOut = () => {
//     setUser(null);
//     setToken("");
//     localStorage.removeItem("site");
//     navigate("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
