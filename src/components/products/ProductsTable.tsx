import { httpRequest, requestMethods } from "@/lib/services/httpService";
import ProductRow from "./ProductRow";

async function ProductsTable() {
  const products = await httpRequest({
    path: "/products",
    method: requestMethods.get,
    cacheConfig: "no-store",
  });
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left  uppercase border-b border-gray-700  text-gray-400 bg-gray-800">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Create Date</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-700 bg-gray-800">
            {products?.map((item: any) => (
              <ProductRow {...item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTable;
