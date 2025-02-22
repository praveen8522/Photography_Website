import React from 'react';

const contactOptions = [
  {
    title: 'Book a Photography Session',
    description: 'Ready to create stunning memories? Contact us to schedule your session today.',
    linkText: 'Schedule Now',
    linkHref: '#'
  },
  {
    title: 'Inquire About Services',
    description: 'Have questions about our services or packages? Get in touch to learn more.',
    linkText: 'Contact Us',
    linkHref: '#'
  },
  {
    title: 'Explore Portfolio',
    description: "Take a look at some of our favorite moments we've captured for clients.",
    linkText: 'View Portfolio',
    linkHref: '#'
  },
  {
    title: 'Request a Quote',
    description: "Need a customized quote for your project? Reach out to us and we'll get back to you with details.",
    linkText: 'Request Quote',
    linkHref: '#'
  },
  {
    title: 'Follow Us on Social Media',
    description: 'Stay updated with our latest work and news. Follow us on social media for more updates.',
    linkText: 'Follow Us',
    linkHref: '#'
  },
  {
    title: 'Client Testimonials',
    description: 'Read what our clients have to say about their experience with us.',
    linkText: 'Read Testimonials',
    linkHref: '#'
  },
  {
    title: 'Frequently Asked Questions',
    description: 'Have questions? Check out our FAQ section to find answers to common queries.',
    linkText: 'View FAQs',
    linkHref: '#'
  },
  {
    title: 'Get Directions',
    description: 'Visit us at our studio. Find directions and contact information here.',
    linkText: 'Get Directions',
    linkHref: '#'
  }
];

export default function ContactUs() {
  return (
    <div className="container mx-auto py-16 px-4" id='Contact'>
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center mb-12">Let's capture your moments together. We're here to help you.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {contactOptions.map((option, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center border-b py-4 px-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
            <a
              href={option.linkHref}
              className="text-lg font-bold text-blue-600 hover:text-blue-500 mt-4 md:mt-0"
            >
              {option.linkText} &gt;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
