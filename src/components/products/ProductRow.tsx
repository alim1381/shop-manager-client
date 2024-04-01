import React from "react";

interface productsRowInterfaca {
  title: string;
  image: string;
  count: number;
  createdAt: string;
}
function ProductRow({ title, image, count, createdAt }: productsRowInterfaca) {
  return (
    <tr className=" text-gray-400">
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          {/* <!-- Avatar with inset shadow --> */}
          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img src={image} alt="products" className=" w-full h-full" />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold">{title}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-sm">{count}</td>
      <td className="px-4 py-3 text-xs">
        <span className="px-2 py-1 font-semibold leading-tight   rounded-full bg-green-700 text-green-100">
          Approved
        </span>
      </td>
      <td className="px-4 py-3 text-sm">{createdAt.split("T")[0]}</td>
    </tr>
  );
}

export default ProductRow;
