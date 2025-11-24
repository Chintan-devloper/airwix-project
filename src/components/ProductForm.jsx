import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";

const ProductForm = () => {
  const { addProduct } = useProducts();
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Product Name is required";
    if (!formData.quantity || formData.quantity <= 0)
      newErrors.quantity = "Quantity is required";
    if (!formData.price || formData.price <= 0)
      newErrors.price = "Price is required";
    if (!formData.category) newErrors.category = "Category is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addProduct({
      ...formData,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
    });

    setFormData({ name: "", quantity: "", price: "", category: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-8"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter product name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md outline-none ${
              errors.quantity ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="0"
          />
          {errors.quantity && (
            <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md outline-none ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="0.00"
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md outline-none ${
              errors.category ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Grocery">Grocery</option>
            <option value="Fashion">Fashion</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs mt-1">{errors.category}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
