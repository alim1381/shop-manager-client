import { httpRequest } from "@/app/actions";
import DeleteProduct from "@/components/products/DeleteProduct";
import EditProductValues from "@/components/products/EditProductValues";
import { requestMethods } from "@/lib/interfaces/interfaces";
import React from "react";

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await httpRequest({
    path: `/products/${params.id}`,
    method: requestMethods.get,
    cacheConfig: "no-store",
  });
  const history = await httpRequest({
    path: `/history/${params.id}`,
    method: requestMethods.get,
    cacheConfig: "no-store",
  });

  console.log("ressss => ", res);
  console.log("history => ", history);
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-200">Product</h2>
      <div className=" w-full flex text-white gap-4 max-lg:flex-col-reverse">
        <div className=" w-1/2 flex flex-col gap-2 max-lg:w-full">
          <h2 className=" font-bold text-lg">
            Name :{" "}
            <span className=" text-base font-medium text-gray-400">
              {res?.title}
            </span>
          </h2>
          <div>
            <h2 className=" font-bold text-lg">Discription :</h2>
            <p className=" text-gray-400">{res?.discription}</p>
          </div>
          <hr className=" border-gray-400" />
          <div className=" flex flex-col gap-4">
            <EditProductValues currentCount={res?.count} productId={res._id} />
            <hr />
            <DeleteProduct productId={res?._id} />
          </div>
        </div>
        <div className=" w-1/2 max-h-96 max-lg:w-full">
          <img
            src={res?.image}
            className=" w-full h-full rounded-lg"
            alt="Product Image"
          />
        </div>
      </div>
      {/* History */}
      <h2 className="my-6 text-2xl font-semibold text-gray-200">History</h2>
      <table className="w-full whitespace-no-wrap">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left  uppercase border-b border-gray-700  text-gray-400 bg-gray-800">
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3 hidden sm:block">Type</th>
            <th className="px-4 py-3">Amount</th>
            <th className="hidden px-4 py-3 sm:block">Prev Count</th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-700 bg-gray-800">
          {history?.map((item: any) => (
            <tr className=" text-gray-400">
              <td className="px-4 py-3">{item.createdAt.split("T")[0]}</td>
              <td className="px-4 py-3 text-sm hidden sm:block">{item.type}</td>
              <td className="px-4 py-3 text-xs">{item.amount}</td>
              <td className="px-4 hidden py-3 text-sm sm:block">
                {item.prev_value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
