import React from "react";
import CreateProductForm from "./components/CreateProductForm";

export default function page() {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-200">
        Create Product
      </h2>
      <CreateProductForm />
    </>
  );
}
