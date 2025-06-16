import React, { useEffect, useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <img
      src={images[index]}
      alt="carrusel"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
};

export default ImageCarousel;