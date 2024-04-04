"use client";
import useRequest from "@/lib/services/useRequest";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";
import { useRouter } from "next/navigation";

enum typeRequestType {
  i = "INCREASE",
  d = "DECREASE",
}
export default function EditProductValues({
  currentCount,
  productId,
}: {
  currentCount: any;
  productId: string;
}) {
  const router = useRouter();
  const [changeValue, setChangeValue] = useState(3);

  const { response, loading, error, fetchRequest } = useRequest(
    "/products",
    "PUT"
  );

  useEffect(() => {
    if (response) {
      toast.success("Change is Success");
      router.refresh();
    } else if (error || response?.statusCode === 400) {
      toast.error(error?.message || "request is faild");
    }
  }, [response, error]);

  const onSubmit = (type: typeRequestType) => {
    if (!changeValue) return toast.error("amount is required");
    fetchRequest({ productId, type, amount: changeValue });
  };

  return (
    <>
      <h2 className=" font-bold text-lg">
        Current Count :{" "}
        <span className=" text-base font-medium text-gray-400">
          {currentCount}
        </span>
      </h2>
      <div className=" relative flex gap-4">
        {loading && <Loader />}
        <button
          className=" p-2 bg-red-600 rounded-md"
          onClick={() => onSubmit(typeRequestType.d)}
        >
          Decrease
        </button>
        <input
          type="number"
          className="w-full bg-gray-700 rounded-md outline-none p-2"
          placeholder="change amount"
          value={changeValue}
          onChange={(e) => setChangeValue(parseInt(e.target.value))}
        />
        <button
          className=" p-2 bg-green-600 rounded-md "
          onClick={() => onSubmit(typeRequestType.i)}
        >
          Increase
        </button>
      </div>
    </>
  );
}
