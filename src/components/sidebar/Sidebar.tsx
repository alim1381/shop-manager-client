import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <>
      <div className="z-20 hidden w-64 overflow-y-auto bg-gray-800 md:block flex-shrink-0">
        <div className="py-4  text-gray-400">
          <a className="ml-6 text-lg font-bold  text-gray-200" href="#">
            Shop Manager
          </a>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-gray-200"
                href="/"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="relative px-6 py-3">
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-gray-200"
                href="/sale-products"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                <span className="ml-4">Sale Product</span>
              </Link>
            </li>
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <Link
                className="inline-flex items-center w-full text-sm font-semibold  transition-colors duration-150  hover:text-gray-200 text-gray-100"
                href="/products"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <span className="ml-4">Products</span>
              </Link>
            </li>
          </ul>
          <div className="px-6 my-6">
            <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              New Product
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div> */}
      <aside className="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-gray-800 md:hidden">
        <div className="py-4 text-gray-400">
          <a className="ml-6 text-lg font-bold text-gray-200" href="#">
            Shop Manager
          </a>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <a
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
                href="index.html"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
          </ul>
          <ul>
            <li className="relative px-6 py-3">
              <a
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-gray-200"
                href="forms.html"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                <span className="ml-4">Sale Product</span>
              </a>
            </li>
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                className="inline-flex items-center w-full text-sm font-semibold  transition-colors duration-150  hover:text-gray-200 text-gray-100"
                href="cards.html"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <span className="ml-4">Products</span>
              </a>
            </li>
          </ul>
          <div className="px-6 my-6">
            <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              New Product
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
