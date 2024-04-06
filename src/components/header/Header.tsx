import React from "react";
import HambergerMenu from "./HambergerMenu";
import SearchItems from "./SearchItems";

function Header() {
  return (
    <header className="z-30 py-4 shadow-md bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto  text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <HambergerMenu />
        {/* <!-- Search input --> */}
        <SearchItems />
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
              aria-label="Account"
              aria-haspopup="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
