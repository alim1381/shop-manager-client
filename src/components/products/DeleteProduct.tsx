"use client";
import useRequest from "@/lib/services/useRequest";
import React, { useEffect } from "react";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { revalidateRouteAction } from "@/app/actions";

export default function DeleteProduct({ productId }: { productId: string }) {
  const router = useRouter();
  const { response, loading, error, fetchRequest } = useRequest(
    `/products/${productId}`,
    "DELETE"
  );

  useEffect(() => {
    if (response) {
      toast.success("delete is Success");
      revalidateRouteAction("/products");
      router.push("/products");
    } else if (error || response?.statusCode === 400) {
      toast.error(error?.message || "request is faild");
    }
  }, [response, error]);

  const onsubmit = () => {
    fetchRequest();
  };

  return (
    <div className=" w-full relative rounded-md">
      {loading && <Loader />}
      <button
        onClick={() => onsubmit()}
        className=" w-full transition p-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-md"
      >
        Delete Product
      </button>
    </div>
  );
}
