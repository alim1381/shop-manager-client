"use client";

import { revalidateRouteAction } from "@/app/actions";
import Loader from "@/components/loader/Loader";
import useRequest from "@/lib/services/useRequest";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CreateProductForm() {
  const router = useRouter();
  const [datas, setDatas] = useState({
    title: "",
    discription: "",
    count: 1,
    image: null,
  });
  const { response, loading, error, fetchRequest, percentProgress } =
    useRequest("/products", "POST", { "Content-Type": "multipart/form-data" });

  const redirectHandler = async () => {
    await revalidateRouteAction("/products");
    router.push("/products");
  };

  useEffect(() => {
    if (response) {
      redirectHandler();
    } else if (error) {
      toast.error(error || "request faild");
    }
  }, [response, error]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (
      datas.title.length < 1 ||
      datas.discription.length < 1 ||
      !Number.isInteger(datas.count) ||
      datas.image == null
    )
      return toast.error(
        `${
          datas.title.length < 1
            ? "Title"
            : datas.discription.length < 1
            ? "Discription"
            : !Number.isInteger(datas.count)
            ? "`Count"
            : "Photo"
        } filde is  empty `
      );

    fetchRequest(datas);
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className=" relative mx-auto lg:w-2/3 md:w-3/4 flex flex-col gap-4"
      >
        {loading && <Loader />}
        <label className="block text-sm">
          <span className=" text-gray-400">Title</span>
          <input
            className="block w-full mt-1 text-sm p-2 rounded border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
            placeholder="Book"
            value={datas.title}
            onChange={(e) =>
              setDatas((prev: any) => ({ ...prev, title: e.target.value }))
            }
          />
        </label>

        <label className="block text-sm">
          <span className=" text-gray-400">Discription</span>
          <textarea
            className="block w-full mt-1 text-sm p-2 rounded border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
            value={datas.discription}
            placeholder="a programing learn Book..."
            onChange={(e) =>
              setDatas((prev: any) => ({
                ...prev,
                discription: e.target.value,
              }))
            }
          />
        </label>

        <label className="block text-sm">
          <span className=" text-gray-400">Current Count</span>
          <input
            type="number"
            className="block w-full mt-1 text-sm p-2 rounded border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
            value={datas.count}
            placeholder="33"
            onChange={(e) =>
              setDatas((prev: any) => ({
                ...prev,
                count: parseInt(e.target.value),
              }))
            }
          />
        </label>

        <label className="block text-sm">
          <span className=" text-gray-400">Photo</span>
          <input
            type="file"
            className="block w-full mt-1 text-sm p-2 rounded border-gray-600 bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple text-gray-300 focus:shadow-outline-gray form-input"
            placeholder="33"
            accept="image/*"
            onChange={(e) =>
              setDatas((prev: any) => ({ ...prev, image: e.target.files?.[0] }))
            }
          />
        </label>

        <button
          type="submit"
          className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          Submit
        </button>
      </form>
      <div className=" w-full flex justify-center mt-6 gap-2 items-center">
        {loading && (
          <div className="w-2/3 bg-gray-600 rounded-full h-2.5">
            <div className="w-full">
              <div
                className=" bg-purple-600 h-2.5 rounded-full"
                style={{ width: `${percentProgress}%` }}
              ></div>
            </div>
          </div>
        )}
        {loading && <span className=" text-white">{percentProgress.toFixed(1)}%</span>}
      </div>
    </>
  );
}
