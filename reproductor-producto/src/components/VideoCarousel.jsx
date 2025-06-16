import React, { useEffect, useState } from 'react';

const VideoCarousel = ({ videos }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 10000); // cada 10s
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <video
      src={videos[index]}
      autoPlay
      muted
      loop
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
};

export default VideoCarousel;
