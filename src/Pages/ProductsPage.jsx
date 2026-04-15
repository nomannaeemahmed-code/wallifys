import React from 'react';
import Products from '../Components/Products';

const ProductsPage = () => {
  return (
    <div className="mt-10">
      <div className="text-center mb-8" style={{ color: '#FFA239' }}>
        <h1 className="text-3xl font-bold">All Products</h1>
      </div>
      {/* Products component handles displaying all items. There is no Slider/Banner included here. */}
      <Products />
    </div>
  );
};

export default ProductsPage;
