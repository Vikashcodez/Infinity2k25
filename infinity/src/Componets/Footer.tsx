import { FC } from 'react';
import InfinityLogoWhite from '../assets/infinity-logo.png';
import LinkedInLogoWhite from '../assets/LinkedInLogoWhite.png';
import './Footer.css';
import InstagramLogoWhite from '../assets/InstagramLogoWhite.png';
import eistin from '../assets/Team/Enstin.jpeg'
import harista from '../assets/Team/harshita.jpeg'
import sidra from '../assets/Team/sidra.jpeg'

// Add sample team member data - replace with your actual data
const teamMembers = [
  { id: 1, name: "Einstein Ellandala", team: "Web Team", image: eistin },
  { id: 2, name: "Harshitha Poluju ", team: "Web Team", image: harista },
  { id: 3, name: "Sidra Aiman", team: "Web Team", image: sidra }
  
];

const Footer: FC = () => {
  return (
    <>
      <div className="FooterBorder1">
        <div className="FooterBorder2">
          <div className="FooterBorder3">
            <div className="FooterBorder4">
            </div>

            <div className="text-white">
              <div className="mb-4 flex align-middle justify-center">
                {/* Logo */}
                <img src={InfinityLogoWhite} alt="Logo" className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 justify-center" />
              </div>
              {/* Name */}
              <div className="text-xl font-bold mb-2 pb-5">&copy; INFINITY 2K25</div>
              {/* Additional Text */}
              <p className="text-gray-400">Department of Computer Science and Engineering, University College of Engineering, Osmania University.</p>
              
              {/* Made with love message */}
              <div className="mt-4 mb-3">
                <p className="text-md text-gray-300 flex items-center justify-center">
                  Made with 
                  <svg className="w-5 h-5 mx-1 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                  by Our Team
                </p>
              </div>
              
              {/* Special Thanks Section - Added here while preserving original design */}
              <div className="mt-4">
                <div className="text-xl font-bold mb-3"></div>
                <div className="flex justify-center gap-6 mb-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="relative group">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-14 h-14 rounded-full border-2 border-gray-300 transition transform group-hover:scale-110 group-hover:border-white"
                      />
                      <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-gray-800 p-2 rounded-md w-36 text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                        <p className="text-sm font-medium text-white">{member.name}</p>
                        <p className="text-xs text-gray-300">{member.team}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Second column */}
            <div className="text-white flex justify-center items-center pr-10 lg:justify-end">
              <div className="flex flex-col gap-4 space-x-4">
                <div className="text-xl font-bold">CONTACT US:</div>
                <div className="text-xl font-light">A.Varshith : 7981942704</div>
                <div className="text-xl font-light mb-2 pb-5">Ganesh : 8341028815</div>

                {/* Social Icons */}
                <div className='flex flex-row gap-4 justify-center align-middle'>
                  <div className="text-xl font-bold mb-2">FOLLOW US:</div>
                  <div>
                    <a href="https://www.instagram.com/infinity2k25ou?igsh=MWIzbnA3dWNkamJ3Yg==" className="text-gray-400 opacity-50 hover:opacity-100 transition-opacity">
                      <img src={InstagramLogoWhite} className="h-8 w-8 sm:h-6 sm:w-6" alt="Instagram Logo" />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/infinityoucse?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 opacity-50 hover:opacity-100 transition-opacity">
                      <img src={LinkedInLogoWhite} className="h-8 w-8 sm:h-6 sm:w-6" alt="LinkedIn Logo" />
                    </a>
                  </div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                  <div className="text-gray-300">&copy; Powered & Secured by CSE Dept.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;