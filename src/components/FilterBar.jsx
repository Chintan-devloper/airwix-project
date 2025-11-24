import React from "react";
import { useProducts } from "../context/ProductContext";

const FilterBar = () => {
  const { searchQuery, setSearchQuery, categoryFilter, setCategoryFilter } =
    useProducts();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <div className="w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="w-full md:w-1/4">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Grocery">Grocery</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
