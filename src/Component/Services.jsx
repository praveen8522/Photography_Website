import React from 'react';
import image1 from '../assets/Services/image1.jpg';
import image2 from '../assets/Services/image2.jpg';
import image3 from '../assets/Services/image3.jpg';
import image4 from '../assets/Services/image4.jpg';

export default function Services() {
  return (
    <div id="Services" className="container mx-auto px-4 py-12">
      <h2 className="text-5xl font-bold text-center text-pink-600 mb-16">Our Services</h2>

      {/* Service Section */}
      <div className="space-y-12">
        {/* Commercial Photography */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="lg:w-1/2 w-full">
            <img src={image1} alt="Commercial Photography" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
            <h3 className="text-yellow-600 text-2xl font-bold mb-4">Commercial Photography</h3>
            <p className="text-gray-700 mb-4">
              We provide your business with high-quality imagery that speaks to your brand. From product photography to corporate
              headshots, our commercial photography services are designed to meet your business needs.
            </p>
            <p className="text-gray-700">
              For feature examples of product shots, branding imagery, and corporate portraits.
            </p>
          </div>
        </div>

        {/* Event Photography */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="lg:w-1/2 w-full lg:order-2">
            <img src={image2} alt="Event Photography" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:order-1">
            <h3 className="text-yellow-600 text-2xl font-bold mb-4">Event Photography</h3>
            <p className="text-gray-700 mb-4">
              From weddings to corporate events, we provide professional event photography that captures the essence of your special
              day. Trust us to document every important moment with style and precision.
            </p>
            <p className="text-gray-700">Include a gallery of event photos, such as weddings, conferences, and parties.</p>
          </div>
        </div>

        {/* Portrait Photography */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="lg:w-1/2 w-full">
            <img src={image3} alt="Portrait Photography" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
            <h3 className="text-yellow-600 text-2xl font-bold mb-4">Portrait Photography</h3>
            <p className="text-gray-700 mb-4">
              Our portrait photography service helps capture the personality and emotions of our subjects. Whether it's family portraits,
              professional headshots, or creative personal projects, we bring out the best in you.
            </p>
            <p className="text-gray-700">We specialize in natural and studio portrait photography.</p>
          </div>
        </div>

        {/* Wedding Photography */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="lg:w-1/2 w-full lg:order-2">
            <img src={image4} alt="Wedding Photography" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:order-1">
            <h3 className="text-yellow-600 text-2xl font-bold mb-4">Wedding Photography</h3>
            <p className="text-gray-700 mb-4">
              Capture the most precious moments of your wedding day with our expert wedding photography services. We focus on storytelling,
              emotions, and fine details to make your memories last a lifetime.
            </p>
            <p className="text-gray-700">We offer pre-wedding, candid, and traditional wedding photography.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
