import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";

const ProductRow = ({ product }) => {
  const { updateProduct, deleteProduct } = useProducts();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...product });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateProduct(product.id, {
      ...editData,
      quantity: Number(editData.quantity),
      price: Number(editData.price),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...product });
    setIsEditing(false);
  };

  const total = product.quantity * product.price;

  if (isEditing) {
    return (
      <tr className="bg-blue-50">
        <td className="p-3 border-b">
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleEditChange}
            className="w-full p-1 border rounded"
          />
        </td>
        <td className="p-3 border-b">
          <input
            type="number"
            name="quantity"
            value={editData.quantity}
            onChange={handleEditChange}
            className="w-full p-1 border rounded"
          />
        </td>
        <td className="p-3 border-b">
          <input
            type="number"
            name="price"
            value={editData.price}
            onChange={handleEditChange}
            className="w-full p-1 border rounded"
          />
        </td>
        <td className="p-3 border-b font-semibold">
          ₹{(editData.quantity * editData.price).toFixed(2)}
        </td>
        <td className="p-3 border-b">
          <select
            name="category"
            value={editData.category}
            onChange={handleEditChange}
            className="w-full p-1 border rounded"
          >
            <option value="Electronics">Electronics</option>
            <option value="Grocery">Grocery</option>
            <option value="Fashion">Fashion</option>
          </select>
        </td>
        <td className="p-3 border-b">
          <div className="flex space-x-2">
            <button onClick={handleSave} className="text-green-600 font-medium">
              Save
            </button>
            <button onClick={handleCancel} className="font-medium">
              Cancel
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr className="transition-colors">
      <td className="p-3 border-b">{product.name}</td>
      <td className="p-3 border-b">{product.quantity}</td>
      <td className="p-3 border-b">₹{product.price.toFixed(2)}</td>
      <td className="p-3 border-b font-semibold">₹{total.toFixed(2)}</td>
      <td className="p-3 border-b">
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-700">
          {product.category}
        </span>
      </td>
      <td className="p-3 border-b">
        <div className="flex space-x-2">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Edit
          </button>
          <button
            onClick={() => deleteProduct(product.id)}
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
