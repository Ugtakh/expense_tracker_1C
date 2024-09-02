"use client";

const Dashboard = () => {
	const storedUser = localStorage.getItem("token");
	console.log("userdata", storedUser);

	return <div>Dashboard</div>;
};

export default Dashboard;
