"use client";
import { useContext, useState } from "react";
import { DashboardContext } from "../context/dashboard-context";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { toast } from "react-toastify";

export const RecordModal = ({ isOpen, close }) => {
  const { categories } = useContext(DashboardContext);
  return (
    <dialog open={isOpen} className="modal">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="modal-box max-w-[800px]">
          <button
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            onClick={close}
          >
            ✕
          </button>
          <h3 className="text-lg font-bold">Add Record</h3>
          <div className="divider"></div>
          <div className="flex gap-12">
            <RightSide categories={categories} />
            <LeftSide />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export const RightSide = ({ categories }) => {
  const [activeTab, setActiveTab] = useState("INC");
  const [recordFormData, setRecordFormData] = useState({
    name: "",
    amount: 0,
    cid: "",
    uid: "329ba2e1-ac59-40d8-9e0b-d5b32fb57455",
    description: "",
  });

  const handleChangeForm = (e) => {
    setRecordFormData({ ...recordFormData, [e.target.name]: e.target.value });
  };

  const addRecordData = async () => {
    const newData = {
      ...recordFormData,
      transaction_type: activeTab,
    };
    console.log("DD", newData);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(`${apiUrl}/records`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
        toast.success("Record amjilttai nemegdlee");
      }
    } catch (error) {
      toast.error("Record nemeh uyd aldaa garlaa");
    }
  };

  return (
    <div className="w-2/5">
      <div className="flex mb-3 space-x-1 bg-gray-200 rounded-full">
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
      <div className="flex flex-col w-full gap-4">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input input-bordered"
          onChange={handleChangeForm}
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          className="input input-bordered"
          onChange={handleChangeForm}
        />
        <div className="flex flex-col">
          <label>Category</label>
          <select
            className="select select-bordered"
            name="cid"
            onChange={handleChangeForm}
          >
            <option disabled selected>
              Choose
            </option>
            {categories?.map((c) => (
              <option value={c.id}>{c.name}</option>
            ))}
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
          onClick={addRecordData}
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
