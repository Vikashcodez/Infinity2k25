import React from 'react';
import spon from '../assets/volta.png';

const SponsorshipTiers = () => {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center justify-center">
      {/* Header Section - Logo Left, Description Right */}
      <div className="max-w-5xl w-full mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Our Sponsors</h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          {/* Left side - Logo */}
          <div className="w-full md:w-1/3 flex justify-center">
            <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiV9bD31eGLAxWFomYCHQxUBg8YABAAGgJzbQ&co=1&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA-CawWq3r4EShnVEdyL9rGM16fixM-VIKj7wCDU_r-exi3UoygEJIhoClpQQAvD_BwE&ohost=www.google.com&cid=CAESVeD2Ugf-UxD-f-uxGT0KtTyrVpzZWRlpDzXtAdi7nfJ6N7o-r2nLUIwhXIoPMWow_Jk0XB52TYQPgRnwvLknoWlar6D-Hdh_5Wfa5MgsqqbH7LGJRLA&sig=AOD64_1Gz-MNRUD0yPBjmS8uXny62LWP5Q&q&adurl&ved=2ahUKEwix8qb31eGLAxX1Q2cHHeRKDcwQ0Qx6BAgJEAE" target="_blank" rel="noopener noreferrer">
              <img src={spon} alt="Company Logo" className="h-32 object-contain hover:opacity-90 transition-opacity" />
            </a>
          </div>
          
          {/* Right side - Description */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold text-blue-300 mb-3">VOLTA</h2>
            <p className="text-gray-300 mb-6">
            Volta Ride App is revolutionizing India's mobility and logistics landscape with its 0% commission model, ensuring a fair, cost-effective experience for both drivers and consumers. Headquartered in Hyderabad, Volta Ride not only provides secure and economical ride-booking services but also offers last-mile delivery and parcel services, making urban transportation and logistics more efficient and sustainable. With a commitment to affordability, transparency, and innovation, Volta Ride is reshaping mobility for a better future.


            </p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.yourvolta&pcampaignid=web_share&pli=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd"></path>
              </svg>
              Download Our App
            </a>
            <a 
              href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiV9bD31eGLAxWFomYCHQxUBg8YABAAGgJzbQ&co=1&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA-CawWq3r4EShnVEdyL9rGM16fixM-VIKj7wCDU_r-exi3UoygEJIhoClpQQAvD_BwE&ohost=www.google.com&cid=CAESVeD2Ugf-UxD-f-uxGT0KtTyrVpzZWRlpDzXtAdi7nfJ6N7o-r2nLUIwhXIoPMWow_Jk0XB52TYQPgRnwvLknoWlar6D-Hdh_5Wfa5MgsqqbH7LGJRLA&sig=AOD64_1Gz-MNRUD0yPBjmS8uXny62LWP5Q&q&adurl&ved=2ahUKEwix8qb31eGLAxX1Q2cHHeRKDcwQ0Qx6BAgJEAE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-4 text-blue-400 hover:text-blue-300 font-medium transition duration-300"
            >
              Visit Website →
            </a>
          </div>
        </div>
      </div>

      {/* Sponsorship Cards */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Platinum Sponsor */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-lg transform transition-all duration-300 hover:scale-105">
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
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-lg transform transition-all duration-300 hover:scale-105">
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
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-lg transform transition-all duration-300 hover:scale-105">
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
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-lg transform transition-all duration-300 hover:scale-105">
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