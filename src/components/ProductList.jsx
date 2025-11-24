import React from 'react';
import FilterBar from './FilterBar';
import ProductTable from './ProductTable';

const ProductList = () => {
    return (
        <div className="mt-8">
            <FilterBar />
            <ProductTable />
        </div>
    );
};

export default ProductList;
