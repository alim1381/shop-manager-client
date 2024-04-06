"use client";
import useRequest from "@/lib/services/useRequest";
import React, { useEffect, useState } from "react";
import ProductsTable from "../products/ProductsTable";
import { usePathname } from "next/navigation";

export default function SearchItems() {
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState("");
  const [items, setItems] = useState([]);
  const [showContent, setShowContent] = useState(false);

  const { response, loading, error, fetchRequest } = useRequest(
    "/products",
    "GET"
  );

  useEffect(() => {
    fetchRequest();
  }, []);

  useEffect(() => {
    if (response) {
      setItems(response);
    }
  }, [response]);

  useEffect(() => {
    setShowContent(false);
  }, [pathname]);

  useEffect(() => {
    if (searchInput.length == 0) {
      fetchRequest();
    }
    if (response) {
      let filteredData = response.filter((item: any) =>
        item?.title?.toLowerCase().includes(searchInput?.toLowerCase())
      );
      setItems(filteredData);
    }
  }, [searchInput]);

  return (
    <>
      <div className="flex justify-center flex-1 lg:mr-32">
        <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
          <div className="absolute inset-y-0 flex items-center pl-2">
            <svg
              className={`w-4 h-4 ${
                loading
                  ? ` fill-yellow-300`
                  : error
                  ? " fill-red-600"
                  : " fill-purple-500"
              }`}
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            onFocus={() => setShowContent(true)}
            className="w-full pl-8 pr-2 py-4 text-sm   border-0 rounded-md placeholder-gray-500 focus:shadow-outline-gray  bg-gray-700 text-gray-200 focus:placeholder-gray-500 focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
            type="text"
            placeholder="Search for projects"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>

      {showContent && (
        <div
          onClick={() => setShowContent(false)}
          className=" fixed top-20 left-0 flex h-screen w-full justify-center mx-auto bg-gray-900/80  "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" w-3/4 z-50 mt-8 max-h-96 overflow-y-scroll sc rounded-lg bg-gray-800 "
          >
            <ProductsTable products={items} />
          </div>
        </div>
      )}
    </>
  );
}
