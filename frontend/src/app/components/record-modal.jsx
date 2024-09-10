"use client";
import { useState } from "react";

export const RecordModal = ({ isOpen, close }) => {
	return (
		<dialog open={isOpen} className="modal">
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
				<div className="modal-box max-w-[800px]">
					<button
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						onClick={close}
					>
						✕
					</button>
					<h3 className="text-lg font-bold">Add Record</h3>
					<div className="divider"></div>
					<div className="flex gap-12">
						<RightSide />
						<LeftSide />
					</div>
				</div>
			</div>
		</dialog>
	);
};

export const RightSide = () => {
	const [activeTab, setActiveTab] = useState("INC");

	return (
		<div className="w-2/5">
			<div className="flex space-x-1 bg-gray-200 rounded-full mb-3">
				<button
					className={`px-11 py-2 rounded-full transition-colors duration-300 ${
						activeTab === "EXP"
							? "bg-blue-500 text-white"
							: "bg-transparent text-black"
					}`}
					onClick={() => setActiveTab("EXP")}
				>
					Expense
				</button>
				<button
					className={`px-11 py-2 rounded-full transition-colors duration-300 ${
						activeTab === "INC"
							? "bg-green-500 text-white"
							: "bg-transparent text-black"
					}`}
					onClick={() => setActiveTab("INC")}
				>
					Income
				</button>
			</div>
			<div className="flex flex-col gap-4 w-full">
				<input
					type="text"
					placeholder="Amount"
					className="input input-bordered"
				/>
				<div className="flex flex-col">
					<label>Category</label>
					<select className="select select-bordered">
						<option disabled selected>
							Choose
						</option>
						<option value="food">Food</option>
						<option value="drink">Drink</option>
						<option value="rent">Rent</option>
						<option value="other">Other</option>
					</select>
				</div>
				<div className="flex gap-3">
					<div className="flex flex-col">
						<label>Date</label>
						<input type="date" className="input input-bordered" />
					</div>
					<div className="flex flex-col">
						<label>Time</label>
						<input type="time" className="input input-bordered" />
					</div>
				</div>
			</div>
			<div className="mt-3">
				<button
					className={`btn ${
						activeTab === "EXP" ? "bg-blue-500" : "bg-green-500"
					} text-white w-full`}
				>
					Add Record
				</button>
			</div>
		</div>
	);
};

export const LeftSide = () => {
	return (
		<div className="flex flex-col w-3/5 gap-3">
			<label>Note</label>
			<textarea
				name="note"
				id="note"
				className="h-[280px] textarea textarea-bordered"
				placeholder="Write here"
			></textarea>
		</div>
	);
};
