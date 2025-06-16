import React, { useEffect, useState } from 'react';

const ProductEspecial = ({ products }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h2>{products[index].product}</h2>
      <h3>${products[index].price.toFixed(2)}</h3>
    </div>
  );
};

export default ProductEspecial;
