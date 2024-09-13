"use client";

import { PlusIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { RecordModal } from "./record-modal";
import { UserContext } from "../context/user-context";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="flex items-center max-w-[1200px] mx-auto justify-between py-4">
      <div className="flex items-center gap-6">
        <Image src="/logo-2.svg" width={28} height={28} alt="logo" />
        <Link href="/dashboard">
          <p>Dashboard</p>
        </Link>
        <Link href="/records">
          <p>Records</p>
        </Link>
        <Link href="/records">
          <p>{user?.name}</p>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <button
          className="btn bg-[#0166FF] text-white btn-sm"
          onClick={() => setIsOpen(true)}
        >
          <PlusIcon />
          Record
        </button>
        <RecordModal isOpen={isOpen} close={handleClose} />
        <div className="w-12 h-12 avatar">
          <div className="w-24 rounded-full">
            <img src={user?.avatarImg} />
          </div>
        </div>
        <button className="btn btn-sm" onClick={logOut}>
          Log out
        </button>
      </div>
    </header>
  );
};
