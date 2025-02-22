import React from 'react';
import image1 from '../assets/Gallaries/image1.jpg';
import image2 from '../assets/Gallaries/image2.jpg';
import image3 from '../assets/Gallaries/image3.jpg';
import image4 from '../assets/Gallaries/image4.jpg';
import image5 from '../assets/Gallaries/image5.jpg';
import image6 from '../assets/Gallaries/image6.jpg';
import image7 from '../assets/Gallaries/image7.jpg';
import image8 from '../assets/Gallaries/image8.jpg';
import image9 from '../assets/Gallaries/image9.jpg';
import image10 from '../assets/Gallaries/image10.jpg';
import image11 from '../assets/Gallaries/image11.jpg';
import image12 from '../assets/Gallaries/image12.jpg';
import image13 from '../assets/Gallaries/image13.jpg';
import image14 from '../assets/Gallaries/image14.jpg';
import image15 from '../assets/Gallaries/image15.jpg';
import image16 from '../assets/Gallaries/image16.jpg';

const galleryImages = [
  { src: image1, caption: 'Image 1' },
  { src: image2, caption: 'Image 2' },
  { src: image3, caption: 'Image 3' },
  { src: image4, caption: 'Image 4' },
  { src: image5, caption: 'Image 5' },
  { src: image6, caption: 'Image 6' },
  { src: image7, caption: 'Image 7' },
  { src: image8, caption: 'Image 8' },
  { src: image9, caption: 'Image 9' },
  { src: image10, caption: 'Image 10' },
  { src: image11, caption: 'Image 11' },
  { src: image12, caption: 'Image 12' },
  { src: image13, caption: 'Image 13' },
  { src: image14, caption: 'Image 14' },
  { src: image15, caption: 'Image 15' },
  { src: image16, caption: 'Image 16' },
];

export default function Gallery() {
  return (
    <div id="Gallery" className="min-h-screen bg-gray-100 text-center py-12">
      <h2 className="text-4xl font-bold mb-10 text-pink-500">Our Galleries</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto p-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <img 
              src={image.src} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
