import React, { useEffect, useState } from 'react';

const ProductNormal = ({ products }) => {
  const [index, setIndex] = useState(0);

  const chunkSize = 5;
  const groups = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    groups.push(products.slice(i, i + chunkSize));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % groups.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [groups.length]);

  return (
    <div style={{ padding: '10px' }}>
      {groups[index].map((prod, i) => (
        <div key={i} style={{ marginBottom: '10px' }}>
          <strong>{prod.product}</strong><br />
          ${prod.price.toFixed(2)}
        </div>
      ))}
    </div>
  );
};

export default ProductNormal;
