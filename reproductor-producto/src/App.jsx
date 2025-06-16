import React, { useEffect, useState } from 'react';
import VideoCarousel from './components/VideoCarousel';
import ImageCarousel from './components/ImageCarousel';
import ProductNormal from './components/ProductNormal';
import ProductEspecial from './components/ProductEspecial';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return <div>Cargando datos...</div>;

  return (
    <div className="app" style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '20%', backgroundColor: '#add8e6' }}>
        <ProductNormal products={data.products.normales} />
      </div>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 3, backgroundColor: '#f8c6a0' }}>
          <VideoCarousel videos={data.videos.video} />
        </div>
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ flex: 1, backgroundColor: '#b6eeb4' }}>
            <ImageCarousel images={data.images} />
          </div>
          <div style={{ flex: 2, backgroundColor: '#e69ce3' }}>
            <ProductEspecial products={data.products.especiales} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
