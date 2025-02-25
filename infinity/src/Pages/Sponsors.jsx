import React from 'react';
import spon from '../assets/spon.png'

const SponsorshipTiers = () => {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Platinum Sponsor */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-800 text-sm font-bold">🥈</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-2">Platinum Sponsor</h2>
            <h3 className="text-xl font-bold text-blue-300 mb-4">Rs. 3,00,000</h3>
            <p className="text-gray-300 mb-2">Fest will be named after the company.</p>
            <p className="text-gray-300 mb-2">Dedicated floor space for exhibits.</p>
            <p className="text-gray-300 mb-2">Logo & name on website, T-shirts, main poster, and campus banners.</p>
            <div className="border-t border-gray-700 my-4"></div>
            <p className="text-gray-300 mb-2">Advertisements across the campus through banners. Premium website integration with a direct link.</p>
            <p className="text-gray-300 mb-2">Customized social media promotions & branding activities.</p>
          </div>
        </div>

        {/* Gold Sponsor */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="text-yellow-800 text-sm font-bold">🥇</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">Gold Sponsor</h2>
            <h3 className="text-xl font-bold text-blue-300 mb-4">Rs. 2,00,000</h3>
            <p className="text-gray-300 mb-2">Fest will be co-sponsored by the company. Dedicated floor space for exhibits.</p>
            <p className="text-gray-300 mb-2">Logo & name on website, T-shirts, and main poster.</p>
            <div className="border-t border-gray-700 my-4"></div>
            <p className="text-gray-300 mb-2">Advertisements through campus banners. Website integration with a sponsor listing.</p>
            <p className="text-gray-300 mb-2">Social media mentions and email promotions.</p>
          </div>
        </div>

        {/* Silver Sponsor */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-800 text-sm font-bold">🥈</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-400 mb-2">Silver Sponsor</h2>
            <h3 className="text-xl font-bold text-blue-300 mb-4">Rs. 1,00,000</h3>
            <p className="text-gray-300 mb-2">Company will sponsor selected events. Logo & name on website and campus banners.</p>
            <div className="border-t border-gray-700 my-4"></div>
            <p className="text-gray-300 mb-2">Banners displayed across campus.</p>
            <p className="text-gray-300 mb-2">Website listing in the sponsor section.</p>
            <p className="text-gray-300 mb-2">Social media mentions for additional reach.</p>
          </div>
        </div>

        {/* Bronze Sponsor */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="text-amber-100 text-sm font-bold">🥉</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-amber-600 mb-2">Bronze Sponsor</h2>
            <h3 className="text-xl font-bold text-blue-300 mb-4">Rs. 50,000</h3>
            <p className="text-gray-300 mb-2">An Advertisement will be published on half page of the souvenir.</p>
            <p className="text-gray-300 mb-2">Company name and logo will be displayed on the banner.</p>
            <div className="border-t border-gray-700 my-4"></div>
            <p className="text-gray-300 mb-2">Company name and logo will be printed in the souvenir.</p>
            <p className="text-gray-300 mb-2">Banners will be displayed in the campus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipTiers;