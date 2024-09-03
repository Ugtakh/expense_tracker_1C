"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/user-context";
import { apiUrl } from "../../utils/util";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
	const router = useRouter();
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const logIn = async () => {
		const { email, password } = userData;

		try {
			const response = await axios.post(`${apiUrl}/login`, { email, password });
			if (response.status === 200) {
				toast.success("User successfully signed in", { autoClose: 1000 });
				const { token } = response.data;
				localStorage.setItem("token", token);
				router.push("/dashboard");
			}
		} catch (error) {
			console.error("There was an error signing in:", error);
			toast.error("Failed to sign in. Please try again.");
		}
	};

	return (
		<div className="flex flex-col justify-center items-center h-screen gap-10">
			<Image src="./logo.svg" width={90} height={25} alt="Logo" />
			<h2>Welcome Back</h2>
			<div className="flex flex-col gap-4">
				<input
					type="text"
					placeholder="Email"
					className="input input-bordered w-full max-w-xs"
					onChange={(e) => setUserData({ ...userData, email: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Password"
					className="input input-bordered w-full max-w-xs"
					onChange={(e) =>
						setUserData({ ...userData, password: e.target.value })
					}
				/>
				<button
					className="btn btn-wide bg-[#0166FF] text-white"
					onClick={logIn}
				>
					Log in
				</button>
			</div>
			<div>
				<span>Don’t have account?</span>
				<Link href="/signup">
					<button className="btn btn-link">Sign up</button>
				</Link>
			</div>
		</div>
	);
};

export default Login;
