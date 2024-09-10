"use client";
import { useState } from "react";

export const RecordModal = ({ isOpen, close }) => {
	const [activeTab, setActiveTab] = useState("INC");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<dialog open={isOpen} className="modal">
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
				<div className="modal-box">
					<button
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						onClick={close}
					>
						✕
					</button>
					<h3 className="text-lg font-bold">Add Record</h3>
					<ul className="menu menu-horizontal bg-[#F3F4F6] mb-3 rounded-lg">
						<li>
							<button onClick={() => handleTabClick("INC")}>Income</button>
						</li>
						<li>
							<button onClick={() => handleTabClick("EXP")}>Expense</button>
						</li>
					</ul>
					<div className="flex flex-col gap-4">
						<input
							type="text"
							placeholder="Amount"
							className="w-full max-w-xs input input-bordered input-primary"
						/>
						<select className="w-full max-w-xs select select-primary">
							<option disabled selected>
								Choose
							</option>
							<option value="food">Food</option>
							<option value="drink">Drink</option>
							<option value="rent">Rent</option>
							<option value="other">Other</option>
						</select>
						<input
							type="date"
							className="w-full max-w-xs input input-bordered input-primary"
						/>
						<input
							type="time"
							className="w-full max-w-xs input input-bordered input-primary"
						/>
					</div>
					<div className="mt-3">
						<form method="dialog">
							<button
								className={`btn ${
									activeTab === "INC" ? "bg-[#0166FF]" : "bg-[#16A34A]"
								} text-white`}
							>
								Add Record
							</button>
						</form>
					</div>
				</div>
			</div>
		</dialog>
	);
};
