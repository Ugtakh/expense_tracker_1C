"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import axios from "axios";
import { apiUrl } from "../../utils/util";
import { toast } from "react-toastify";

const Dashboard = () => {
	const { user } = useContext(UserContext);
	const [transactionData, setTransactionData] = useState([]);

	const fetchTransactions = async () => {
		try {
			const res = await axios.get(`${apiUrl}/records/${user.id}`);
			setTransactionData(res.data);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch transactions");
		}
	};

	useEffect(() => {
		if (user && user.id) {
			fetchTransactions();
		}
	}, [user.id]);

	return (
		<div>
			<div>
				<h2>Records</h2>
				{transactionData?.transactions?.map((transaction, index) => {
					return (
						<div key={index} className="flex">
							<img src="/income.svg" alt="income" />
							<div>
								<p className="mb-1">{transaction?.name}</p>
								<p className="text-[#6B7280]">{transaction?.createdat}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dashboard;
