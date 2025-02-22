import React from 'react';
import image1 from '../assets/Blog-images/image1.jpeg';
import image2 from '../assets/Blog-images/image2.jpeg';
import image3 from '../assets/Blog-images/image3.jpg';
import image4 from '../assets/Blog-images/image4.jpg';

const blogPosts = [
  {
    image: image1,
    title: 'Exploring the Mountains',
    description: 'Discover the serenity of the mountains through my lens...',
    link: '#',
  },
  {
    image: image2,
    title: 'City Lights at Night',
    description: 'Experience the vibrant life of the city after dark...',
    link: '#',
  },
  {
    image: image3,
    title: 'Sunset by the Sea',
    description: 'Witness the breathtaking beauty of the ocean at sunset...',
    link: '#',
  },
  {
    image: image4,
    title: 'Autumn in the Forest',
    description: 'The forest comes alive with colors in autumn...',
    link: '#',
  },
];

const Blog = () => {
  return (
    <>
      {/* Blog Header Section */}
      <div id="Blog" className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
          Our Blog
        </h1>
      </div>

      {/* Welcome Section */}
      <div className="flex flex-col items-center justify-center text-center h-64 px-4 bg-gradient-to-r from-pink-300 via-green-300 to-blue-300">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Welcome to My Photography Journey
        </h2>
        <p className="text-md md:text-lg text-white">
          Capturing the world through my lens.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">{post.description}</p>
                <a
                  href={post.link}
                  className="inline-block px-4 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;