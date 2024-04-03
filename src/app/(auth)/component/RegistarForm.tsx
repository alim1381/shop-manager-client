"use client";

import React, { useState } from "react";
import { httpRequest, setCookieAction } from "@/app/actions";
import { requestMethods } from "@/lib/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "@/components/loader/Loader";

export default function RegistarForm() {
  const router = useRouter();

  const [shop_name, setShop_name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (shop_name.length < 1 || username.length < 1 || password.length < 1)
      return toast.error(
        `${
          shop_name.length < 1
            ? "Shop Name"
            : username.length < 1
            ? "username"
            : "password"
        } Field are required`
      );

    try {
      setLoading(true);
      const res = await httpRequest({
        path: "/auth/register",
        method: requestMethods.post,
        data: { shop_name, username, password },
      });
      setLoading(false);

      if (res?.statusCode && res?.statusCode !== 200 && res?.statusCode !== 201)
        return toast.error(res.message || "request failed");

      if (res?.token) {
        setCookieAction("accessToken", res.token);
        toast.success("Success in transition...");
        return router.push("/");
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.message || "request failed");
    }
  };
  return (
    <form onSubmit={onSubmit} className=" relative">
      {loading && <Loader />}
      <label className="block text-sm">
        <span className=" text-gray-400">Shop Name</span>
        <input
          className="block w-full mt-1 text-sm p-2 rounded border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
          placeholder="twi shop"
          onChange={(e) => setShop_name(e.target.value)}
        />
      </label>
      <label className="block text-sm">
        <span className=" text-gray-400">Username</span>
        <input
          className="block w-full mt-1 text-sm p-2 rounded border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
          placeholder="alim"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="block mt-4 text-sm">
        <span className=" text-gray-400">Password</span>
        <input
          className="block w-full mt-1 text-sm p-2 rounded border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
          placeholder="***************"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {/* <!-- You should use a button here, as the anchor is only used for the example  --> */}
      <button
        type="submit"
        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
      >
        Register
      </button>
    </form>
  );
}
