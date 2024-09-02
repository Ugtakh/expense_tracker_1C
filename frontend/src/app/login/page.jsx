"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "../context/user-context";

const Login = () => {
	const { userData, setUserData, logIn } = useContext(UserContext);
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
