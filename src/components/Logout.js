import React from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Logout() {
  return (
    <div className=" flex align-middle text-sm  text-gray-500 gap-2 ">
      <button
        onClick={() => signOut()}
        className=" font-inter flex gap-1 uppercase  py-2 px-4 rounded-md   mx-auto hover:bg-transparent cursor-pointer  hover:text-slate-600 hover:border-slate-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
        LOGOUT
      </button>
    </div>
  );
}
