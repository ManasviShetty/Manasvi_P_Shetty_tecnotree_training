import React from 'react';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';

function ImageGallery() {
  return (
    <section id="gallery-section">
      <h2>My Work</h2>
      <div className="gallery-container">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
        <img src={image5} alt="Image 5" />
        <img src={image6} alt="Image 6" />
      </div>
    </section>
  );
}

export default ImageGallery;
