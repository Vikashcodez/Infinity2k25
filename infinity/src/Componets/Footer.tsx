import { FC } from 'react';
import InfinityLogoWhite from '../assets/infinity-logo.png';
import LinkedInLogoWhite from '../assets/LinkedInLogoWhite.png';
import './Footer.css';
import InstagramLogoWhite from '../assets/InstagramLogoWhite.png';

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
                    <a href="https://www.instagram.com/infinity2k25ou?igsh=MWIzbnA3dWNkamJ3Yg==" className="text-gray-400 opacity-50 hover:opacity-100">
                      <img src={InstagramLogoWhite} className="h-8 w-8 sm:h-6 sm:w-6" alt="Instagram Logo">
                      </img>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <a href="https://www.linkedin.com/in/infinityoucse?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 opacity-50 hover:opacity-100">
                          <img src={LinkedInLogoWhite} className="h-8 w-8 sm:h-6 sm:w-6" alt="LinkedIn Logo">
                          </img>
                      </a>
                    </a>
                  </div>
                </div>
                <div  className='flex flex-row justify-center items-center'>
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