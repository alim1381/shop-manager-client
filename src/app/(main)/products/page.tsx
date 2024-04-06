import { httpRequest } from "@/app/actions";
import ProductsTable from "@/components/products/ProductsTable";
import { requestMethods } from "@/lib/interfaces/interfaces";
export const dynamic = "force-dynamic";
async function ProductsPage() {
  const products = await httpRequest({
    path: "/products",
    method: requestMethods.get,
    cacheConfig: "no-store",
  });
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-200">Products</h2>
      <ProductsTable products={products} />
    </>
  );
}

export default ProductsPage;
