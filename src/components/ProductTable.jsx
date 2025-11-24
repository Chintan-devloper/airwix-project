import React from "react";
import { useProducts } from "../context/ProductContext";
import ProductRow from "./ProductRow";

const ProductTable = () => {
  const { filteredProducts, grandTotal } = useProducts();

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-8 bg-white rounded-lg shadow-sm">
        No products found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="p-3 border-b font-bold">Product</th>
            <th className="p-3 border-b font-bold">Quantity</th>
            <th className="p-3 border-b font-bold">Price</th>
            <th className="p-3 border-b font-bold">Total</th>
            <th className="p-3 border-b font-bold">Category</th>
            <th className="p-3 border-b font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100 font-bold text-gray-800">
            <td className="p-3 border-t text-right" colSpan="3">
              Grand Total:
            </td>
            <td className="p-3 border-t text-lg" colSpan="3">
              ₹{grandTotal.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductTable;
