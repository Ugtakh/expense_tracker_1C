"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/utils/util";

const SignUp = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [image, setImage] = useState(null);

  const handleImageUpload = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "byurziwm");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const signUp = async () => {
    // const imageUrl = await handleImageUpload();
    // if (!imageUrl) return;

    const { name, email, password, repassword } = userData;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email, name, password }),
        }
      );

      if (response.status === 201) {
        toast.success("User successfully signed up", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <Image src="./logo.svg" width={90} height={25} alt="Logo" />
      <h2>Create Geld account</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full max-w-xs input input-bordered"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full max-w-xs input input-bordered"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full max-w-xs input input-bordered"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Re-password"
          className="w-full max-w-xs input input-bordered"
          value={userData.repassword}
          onChange={(e) =>
            setUserData({ ...userData, repassword: e.target.value })
          }
        />
        {/* <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full max-w-xs input input-bordered"
        /> */}
        <button className="btn bg-[#0166FF] text-white " onClick={signUp}>
          Sign Up
        </button>
      </div>
      <div>
        <span>Already have account?</span>
        <Link href="/login">
          <button className="btn btn-link">Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
