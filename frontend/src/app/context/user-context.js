"use client"

import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ userId: "", name: "", email: "", avatarImg: "" });

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8008/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };


  // useEffect(() => {
  //   const storedUser = localStorage.getItem("token");
  //   if (storedUser) {
  //     setUserData(JSON.parse(storedUser));
  //   }
  // }, []);

  // const signUp = async () => {
  //   const { name, email, password, repassword } = userData;

  //   if (password !== repassword) {
  //     toast.error("Password does not match");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("http://localhost:8008/signup", {
  //       name,
  //       email,
  //       password,
  //     });

  //     if (response.status === 200) {
  //       toast.success("User successfully signed up");
  //       router.push("/login");
  //     }
  //   } catch (error) {
  //     console.error("There was an error signing up:", error);
  //     toast.error("Failed to sign up. Please try again.");
  //   }
  // };

  // const logIn = async () => {
  //   const { email, password } = userData;

  //   try {
  //     const response = await axios.post("http://localhost:8008/login", { email, password })
  //     if (response.status === 200) {
  //       toast.success("User successfully signed in");
  //       const { token } = response.data
  //       localStorage.setItem('token', token)
  //       router.push("/dashboard");
  //     }
  //   } catch (error) {
  //     console.error("There was an error signing in:", error);
  //     toast.error("Failed to sign in. Please try again.");
  //   }
  // }

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
}
