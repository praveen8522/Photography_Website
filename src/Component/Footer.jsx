import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const socialMedia = [
  { name: 'WhatsApp', icon: <FaWhatsapp />, link: 'https://wa.me/917904013335', bgColor: 'bg-green-500' },
  { name: 'Facebook', icon: <FaFacebookF />, link: 'https://www.facebook.com/karaivisualkishore/', bgColor: 'bg-blue-600' },
  { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/karai_visual_photography/', bgColor: 'bg-pink-600' },
  { name: 'YouTube', icon: <FaYoutube />, link: 'https://youtube.com/@KaraiVisualPhotography', bgColor: 'bg-red-500' },
];

export default function Footer() {
  return (
    <div className="bg-gray-50 py-8">
      {/* Follow Us Section */}
      <div className="container mx-auto text-center mb-8 px-4">
        <h2 className="text-3xl font-semibold mb-6">Follow Us</h2>
        <div className="flex justify-center space-x-4 flex-wrap">
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-4 ${social.bgColor} hover:scale-105 transition-transform text-white text-xl`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <p className="max-w-xs">
              We capture moments that last forever. Get in touch with us to create your own unforgettable memories.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p>Email: contact@photography.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-gray-400">
          &copy; 2025 Photography Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

