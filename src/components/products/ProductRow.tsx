import Link from "next/link";
import React from "react";

interface productsRowInterfaca {
  _id: string;
  title: string;
  image: string;
  count: number;
  createdAt: string;
}
function ProductRow({
  _id,
  title,
  image,
  count,
  createdAt,
}: productsRowInterfaca) {
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
            <p className="font-semibold break-words">
              {title.substring(0, 10)}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-sm hidden sm:block">{count}</td>
      <td className="px-4 py-3 text-xs">
        <Link
          href={`/products/edit/${_id}`}
          className="px-2 py-1 font-semibold leading-tight   rounded-full bg-green-700 text-green-100"
        >
          Open
        </Link>
      </td>
      <td className="px-4 hidden py-3 text-sm sm:block">
        {createdAt.split("T")[0]}
      </td>
    </tr>
  );
}

export default ProductRow;
