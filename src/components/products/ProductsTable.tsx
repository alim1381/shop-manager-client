import ProductRow from "./ProductRow";

function ProductsTable({ products }: { products: any }) {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left  uppercase border-b border-gray-700  text-gray-400 bg-gray-800">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3 hidden sm:block">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="hidden px-4 py-3 sm:block">Create Date</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-700 bg-gray-800">
            {products?.map((item: any) => (
              <ProductRow key={item?._id} {...item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsTable;
