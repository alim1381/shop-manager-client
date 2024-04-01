import React from "react";

function ProductsTable() {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left  uppercase border-b border-gray-700  text-gray-400 bg-gray-800">
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-700 bg-gray-800">
            <tr className=" text-gray-400">
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  {/* <!-- Avatar with inset shadow --> */}
                  <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p className="font-semibold">Hans Burger</p>
                    <p className="text-xs  text-gray-400">10x Developer</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm">$ 863.45</td>
              <td className="px-4 py-3 text-xs">
                <span className="px-2 py-1 font-semibold leading-tight   rounded-full bg-green-700 text-green-100">
                  Approved
                </span>
              </td>
              <td className="px-4 py-3 text-sm">6/10/2020</td>
            </tr>

            <tr className=" text-gray-400">
              <td className="px-4 py-3">
                <div className="flex items-center text-sm">
                  {/* <!-- Avatar with inset shadow --> */}
                  <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p className="font-semibold">Jolina Angelie</p>
                    <p className="text-xs  text-gray-400">Unemployed</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm">$ 369.95</td>
              <td className="px-4 py-3 text-xs">
                <span className="px-2 py-1 font-semibold leading-tight   rounded-full text-white bg-orange-600">
                  Pending
                </span>
              </td>
              <td className="px-4 py-3 text-sm">6/10/2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTable;
