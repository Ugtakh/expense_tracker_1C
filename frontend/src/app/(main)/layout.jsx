"use client";

import { useContext, useEffect } from "react";
import { Header } from "../components";
import { UserContext } from "../context/user-context";
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
			<Header user={user} logOut={logOut} />
			<main className="bg-[#F3F4F6] h-screen">{children}</main>
		</div>
	);
};

export default Layout;
