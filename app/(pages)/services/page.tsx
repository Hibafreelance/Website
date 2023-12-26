import React from 'react';

const ServicesPage = () => {
  return (
    <div className="container mx-auto mt-10 text-center">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 mt-10">Services We Offer</h1>
        <p className="text-gray-600 mb-10">
          At our learning platform, we don't just provide courses. We offer a range of services including creating and designing full brands and websites. Our team is dedicated to delivering high-quality solutions tailored to your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 md:px-1 gap-5 mt-10 mb-8">
          {/* Pricing Card 1 */}
          <div className="bg-white rounded-md shadow-md p-4 mb-4 flex flex-col h-full">
            <h2 className="text-xl font-bold mb-2">Brand Identity</h2>
            <ul className="text-left mb-2">
              <li>- Logo Design</li>
              <li>- Color Palette</li>
              <li>- Brand Guidelines</li>
              <li>- Stationery Design</li>
              <li>- Website Elements</li>
              <li>- Social Media Assets</li>
            </ul>
            <p className="text-gray-600 mb-2 h-16 font-bold">
              <del className="text-red-500">$75</del> $60 (25% off)
            </p>
            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-auto">Buy</button>
          </div>

          {/* Pricing Card 2 */}
          <div className="bg-white rounded-md shadow-md p-4 mb-4 flex flex-col h-full">
            <h2 className="text-xl font-bold mb-2">Website Design</h2>
            <ul className="text-left mb-2">
              <li>- Consultation and Discovery</li>
              <li>- Wireframing</li>
              <li>- UI/UX Responsive Design</li>
              <li>- Color Scheme and Brand Integration</li>
              <li>- CMS Integration</li>
              <li>- SEO Optimization</li>
            </ul>
            <p className="text-gray-600 mb-2 h-16 font-bold">
              <del className="text-red-500">$199</del> $99 (50% off)
            </p>
            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-auto">Buy</button>
          </div>

          {/* Pricing Card 3 */}
          <div className="bg-white rounded-md shadow-md p-4 mb-4 flex flex-col h-full">
            <h2 className="text-xl font-bold mb-2">Full Package</h2>
            <ul className="text-left mb-2">
              <li>- Brand Identity</li>
              <li>- Website Design</li>
              <li>- Training and Documentation</li>
              <li>- Maintenance and Support</li>
            </ul>
            <p className="text-gray-600 mb-2 h-16 font-bold">
              <del className="text-red-500">$399</del> $199 (50% off)
            </p>
            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-auto">Buy</button>
          </div>
        </div>

        {/* Contact Us Button */}
        <a href="https://wa.me/+31637836657" target='_blank'>
        <button className="bg-green-500 text-white p-2 px-10 rounded-md hover:bg-green-600" >
          Contact Us
        </button></a>

      </div>
    </div>
  );
};

export default ServicesPage;
