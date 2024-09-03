"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import Image from "next/image";
import Link from "next/link";
import { PlusIcon } from "../icons";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
	const { user, fetchUserData } = useContext(UserContext);
	const router = useRouter();
	useEffect(() => {
		fetchUserData();
	}, []);

	const logOut = () => {
		localStorage.removeItem("token");
		router.push("/login");
	};

	return (
		<div>
			<header className="flex items-center max-w-[1200px] mx-auto justify-between py-4">
				<div className="flex gap-6 items-center">
					<Image src="/logo-2.svg" width={28} height={28} alt="logo" />
					<Link href="/dashboard">
						<p>Dashboard</p>
					</Link>
					<Link href="/records">
						<p>Records</p>
					</Link>
				</div>
				<div className="flex gap-6 items-center">
					<button className="btn bg-[#0166FF] text-white btn-sm">
						<PlusIcon />
						Records
					</button>
					<div className="avatar w-12 h-12">
						<div className="w-24 rounded-full">
							<img src={user?.avatarImg} />
						</div>
					</div>
					<button className="btn btn-sm" onClick={logOut}>
						Log out
					</button>
				</div>
			</header>
			{children}
		</div>
	);
};

export default Layout;
