"use client";
import { SidebarContext } from "@/context/SidebarContext";
import React, { useContext } from "react";

export default function HambergerMenu() {
  let { setIsOpen } = useContext(SidebarContext);
  return (
    <button
      className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
      aria-label="Menu"
      onClick={() => setIsOpen((prev: any) => !prev)}
    >
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}
