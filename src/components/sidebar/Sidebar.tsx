"use client";
import { SidebarContext } from "@/context/SidebarContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

function Sidebar() {
  const pathname = usePathname();
  let { isOpen, setIsOpen } = useContext(SidebarContext);

  const navigationItems = [
    {
      title: "Dashboard",
      link: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      title: "Sale Product",
      link: "/sale-products",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
    {
      title: "Products",
      link: "/products",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className="z-20 hidden w-64 overflow-y-auto bg-gray-800 md:block flex-shrink-0">
        <div className="py-4  text-gray-400">
          <a className="ml-6 text-lg font-bold  text-gray-200" href="#">
            Shop Manager
          </a>
          <ul className="mt-6">
            {navigationItems.map((item, index) => (
              <li className="relative px-6 py-3" key={index}>
                {pathname == item.link && (
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                )}
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-gray-200"
                  href={item.link}
                >
                  {item.icon}
                  <span className="ml-4">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-6 my-6">
            <Link
              href={"/products/new"}
              className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
              New Product
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div> */}
      {
        <aside
          className={` ${
            isOpen ? ` translate-x-0` : `-translate-x-[100%]`
          } transition fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-20 overflow-y-auto bg-gray-800 md:hidden`}
        >
          <div className="py-4 text-gray-400">
            <a className="ml-6 text-lg font-bold text-gray-200" href="#">
              Shop Manager
            </a>
            <ul className="mt-6">
              {navigationItems.map((item, index) => (
                <li
                  className="relative px-6 py-3"
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  {pathname == item.link && (
                    <span
                      className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                  )}
                  <Link
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  hover:text-gray-200"
                    href={item.link}
                  >
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-6 my-6">
              <Link
                href={"/products/new"}
                className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                New Product
                <span className="ml-2" aria-hidden="true">
                  +
                </span>
              </Link>
            </div>
          </div>
        </aside>
      }
    </>
  );
}

export default Sidebar;
