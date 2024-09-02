"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
	const router = useRouter();
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		password: "",
		repassword: "",
	});

	const signUp = async () => {
		const { name, email, password, repassword } = userData;

		if (password !== repassword) {
			toast.error("Password does not match");
			return;
		}

		try {
			const response = await axios.post("http://localhost:8008/signup", {
				name,
				email,
				password,
			});

			if (response.status === 200) {
				toast.success("User successfully signed up");
				router.push("/dashboard");
			}
		} catch (error) {
			console.error("There was an error signing up:", error);
			toast.error("Failed to sign up. Please try again.");
		}
	};

	return (
		<div className="flex flex-col justify-center items-center h-screen gap-10">
			<Image src="./logo.svg" width={90} height={25} alt="Logo" />
			<h2>Create Geld account</h2>
			<div className="flex flex-col gap-4">
				<input
					type="text"
					placeholder="Name"
					className="input input-bordered w-full max-w-xs"
					value={userData.name}
					onChange={(e) => setUserData({ ...userData, name: e.target.value })}
				/>
				<input
					type="text"
					placeholder="Email"
					className="input input-bordered w-full max-w-xs"
					value={userData.email}
					onChange={(e) => setUserData({ ...userData, email: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Password"
					className="input input-bordered w-full max-w-xs"
					value={userData.password}
					onChange={(e) =>
						setUserData({ ...userData, password: e.target.value })
					}
				/>
				<input
					type="password"
					placeholder="Re-password"
					className="input input-bordered w-full max-w-xs"
					value={userData.repassword}
					onChange={(e) =>
						setUserData({ ...userData, repassword: e.target.value })
					}
				/>
				<button
					className="btn btn-wide bg-[#0166FF] text-white"
					onClick={signUp}
				>
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
