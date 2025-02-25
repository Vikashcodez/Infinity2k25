import React from 'react';
import { Linkedin } from 'lucide-react';

import conv from '../assets/Team/conv.jpeg'
import abhi from '../assets/Team/Abhi.png'
import nar from '../assets/Team/Nar.jpeg'
import mani from '../assets/Team/Mani.jpeg'
import siddha from '../assets/Team/Sidda.jpeg'
import rohit from '../assets/Team/rohit.jpeg'
import mee from '../assets/Team/mee.jpeg'
import jointsec from '../assets/Team/jointsec.jpeg'
import shyam from '../assets/Team/shyam.jpeg'
import divya from '../assets/Team/divya.jpeg'
import kartik from '../assets/Team/kartikt.jpeg'
import pandita from '../assets/Team/pandita.jpeg'
import vardhan from '../assets/Team/vardhan.jpeg'
import sathwika from '../assets/Team/sathwika.jpeg'
import vedesh from '../assets/Team/vesdesh.jpeg'
import kamlini from '../assets/Team/kamilini.jpeg'
import sneha from '../assets/Team/sneha.jpeg'
import venu from '../assets/Team/venu.jpeg'
import Abhinav from '../assets/Team/Abhinav.jpeg'
import Aravind from '../assets/Team/aravind.jpeg'
import manidatt from '../assets/Team/manidatt.jpeg'
import harini from '../assets/Team/harini.jpeg'
import navitha from '../assets/Team/navitha.jpeg'
import tanmay from '../assets/Team/tanmay.jpeg'
import mukesh from '../assets/Team/mukesh.jpeg'
import vastav from '../assets/Team/vathsav.jpeg'
import seshu from '../assets/Team/seshu.jpeg'
import shravan from '../assets/Team/shravan.jpeg'
import sreeja from '../assets/Team/sreeja.jpeg'
import yogesh from '../assets/Team/yogesh.jpeg'
import ramiza from '../assets/Team/ramiza.jpeg'
import rithika from '../assets/Team/Rithika.jpeg'
import harsha from '../assets/Team/Harsha.jpeg'
import deekshita from '../assets/Team/deeskta.jpeg'
import devika from '../assets/Team/devika.jpeg'
import namarat from'../assets/Team/namrata.jpeg'
import kreeti from '../assets/Team/kreeti.jpeg'
import kreethna from '../assets/Team/kreetana.jpeg'
import likithad from '../assets/Team/likithad.jpeg'
import charan from '../assets/Team/charan.jpeg'
import tejaswini from '../assets/Team/tejaswini.jpg'
import chakri from '../assets/Team/chakri.jpeg'
import navs from '../assets/Team/navs.jpeg'
import anurima  from '../assets/Team/anurima.jpeg'
import singdha from '../assets/Team/singdha.jpeg'
import praneth from '../assets/Team/praneeth.jpeg'
import swetha from '../assets/Team/swetha.jpeg'
import rakshan from '../assets/Team/rakshan.jpeg'
import ganesh from '../assets/Team/ganesh.jpeg'
import atiq from '../assets/Team/atiq.jpeg'
import srija from '../assets/Team/srija.jpg'
import prathyusha from '../assets/Team/prathyusha.jpg'
import vaishnavi from '../assets/Team/vaishnavi.jpeg'
import cvardhan from '../assets/Team/cvardhan.jpeg'
const TeamPage = () => {
  const teams = [
    {
      name: "Core Team",
      color: "from-cyan-500",
      borderColor: "cyan",
      members: [
        { name: "A Varshith", designation: "Conveneor", photo: conv, linkedin: "https://linkedin.com/in/john-smith" },
        { name: "Jitendra Ganesh", designation: "Secratary", photo: ganesh, linkedin: "https://linkedin.com/in/sarah-johnson" },
        { name: "Shyam Cheatan", designation: "Treasurer", photo: shyam , linkedin: "https://www.linkedin.com/in/shyam-chetan-b9357a237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Mukesh", designation: "Treasurer", photo: mukesh, linkedin: "https://linkedin.com/in/emma-davis" },
        { name: "Abhigna", designation: "Joint Secretary", photo: jointsec , linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "O Sreeja", designation: "Joint Secretary", photo: sreeja, linkedin: "https://linkedin.com/in/chris-brown" }
      ]
    },
    {
      name: "Co-Convener",
      color: "from-cyan-500",
      borderColor: "cyan",
      members: [
        { name: "G Aravind", designation: "Co-Convener", photo: Aravind , linkedin: "https://linkedin.com/in/john-smith" },
        { name: "Sneha", designation: "Co-Convener", photo: sneha , linkedin: "https://linkedin.com/in/sarah-johnson" },
        { name: "Abhinav", designation: "Co-Convener", photo: Abhinav, linkedin: "https://linkedin.com/in/mike-wilson" },
        { name: "Navitha", designation: "Co-Convener", photo: navitha, linkedin: "https://linkedin.com/in/emma-davis" },
        { name: "Seshu", designation: "Co-Convener", photo: seshu, linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Sai Vardhan", designation: "Co-Convener", photo: cvardhan, linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Shravan", designation: "Co-Convener", photo: shravan, linkedin: "https://www.linkedin.com/in/shravanbandi159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Yogeshwar", designation: "Co-Convener", photo: yogesh, linkedin: "https://linkedin.com/in/chris-brown" }
      ]
    },
    {
      name: "Sponsorship Team",
      color: "from-cyan-500",
      borderColor: "cyan",
      members: [
        { name: "Kartik Pandita", designation: "Sponsorship Team", photo: pandita , linkedin: "https://linkedin.com/in/john-smith" },
        { name: "Kamalini", designation: "Sponsorship Team", photo: kamlini , linkedin: "https://linkedin.com/in/sarah-johnson" },
        { name: "Mani Kanta", designation: "Sponsorship Team", photo: mani , linkedin: "https://linkedin.com/in/mike-wilson" },
        { name: "Sathwika", designation: "Sponsorship Team", photo: sathwika , linkedin: "https://linkedin.com/in/emma-davis" },
        { name: "Rakshan ", designation: "Sponsorship Team", photo: rakshan , linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Harshvardhan", designation: "Sponsorship Team", photo: harsha, linkedin: "https://www.linkedin.com/in/harshavardhan-vakarnati" },
        { name: "Atiq", designation: "Sponsorship Team", photo: atiq, linkedin: "https://linkedin.com/in/chris-brown" }
        
      ]
    },
    {
      name: "Technical Team",
      color: "from-cyan-500",
      borderColor: "cyan",
      members: [
        { name: "Venu", designation: "Technical Team", photo: venu , linkedin: "https://linkedin.com/in/john-smith" },
        { name: "Snigdha", designation: "Technical Team", photo: singdha, linkedin: "https://linkedin.com/in/sarah-johnson" },
        { name: "Divya Sathi", designation: "Technical Team", photo: divya , linkedin: "https://linkedin.com/in/john-smith" },
        { name: "Harini", designation: "Technical Team", photo: harini, linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Navainth saii", designation: "Technical Team", photo: navs, linkedin: "https://linkedin.com/in/mike-wilson" },
        { name: "Mani Datt", designation: "Technical Team", photo: manidatt , linkedin: "https://linkedin.com/in/emma-davis" },
        { name: "Tanmay", designation: "Technical Team", photo: tanmay, linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Vedesh Padal", designation: "Technical Team", photo: vedesh , linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Karteek Tadimalla", designation: "Technical Team", photo: kartik , linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Praneeth", designation: "Technical Team", photo: praneth , linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Siddardha", designation: "Technical Team", photo: siddha, linkedin: "https://linkedin.com/in/chris-brown" }
      ]
    },
    {
      name: "Website & Design Team",
      color: "from-cyan-500",
      borderColor: "cyan",
      members: [
        { name: "Rohit", designation: "Web & Design Team", photo: rohit , linkedin: "https://linkedin.com/in/john-smith" },
        { name: "Siddardha", designation: "Web & Design Team", photo: siddha , linkedin: "https://linkedin.com/in/sarah-johnson" },
        { name: "Narendar Singh", designation: "Web & Design Team", photo: nar , linkedin: "https://linkedin.com/in/mike-wilson" },
        { name: "Vikash", designation: "Web & Design Team", photo: mee , linkedin: "https://linkedin.com/in/emma-davis" },
        { name: "S Abhishekh", designation: "Web & Design Team", photo: abhi , linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Ramiza", designation: "Web & Design Team", photo: ramiza, linkedin: "https://www.linkedin.com/in/ramiza21/" },
        { name: "Sai srivathsav", designation: "Web & Design Team", photo: vastav, linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Rithika", designation: "Web & Design Team", photo: rithika, linkedin: "https://www.linkedin.com/in/rithika-kasula" }
      ]
    },
    {
      name: "Content Team",
      color: "from-cyan-500",
      borderColor: "cyan",
      members: [
        { name: "L Chandreashekar", designation: "Content Team", photo: "/api/placeholder/400/400" , linkedin: "https://linkedin.com/in/john-smith" },
        { name: "Ade Sai Vardhan", designation: "Content Team", photo: vardhan , linkedin: "https://linkedin.com/in/sarah-johnson" },
        { name: "Likhitha D", designation: "Content Team", photo: likithad , linkedin: "https://linkedin.com/in/mike-wilson" },
        { name: "Keerthana", designation: "Content Team", photo: kreethna , linkedin: "https://linkedin.com/in/emma-davis" },
        { name: "Varsha", designation: "Content Team", photo: "/api/placeholder/400/400" , linkedin: "https://linkedin.com/in/chris-brown" },
      
      ]
    },
    {
      name: "Cultral Heads",
      color: "from-cyan-500",
      borderColor: "cyan",
      members: [
        { name: "J Sri Charkri", designation: "Cultral Heads", photo: chakri , linkedin: "https://linkedin.com/in/john-smith" },
        { name: "Tejaswini", designation: "Cultral Heads", photo: tejaswini , linkedin: "https://linkedin.com/in/sarah-johnson" },
        { name: "Anurima", designation: "Cultral Heads", photo: anurima , linkedin: "https://linkedin.com/in/mike-wilson" },
        { name: "Keerthi", designation: "Cultral Heads", photo: kreeti , linkedin: "https://linkedin.com/in/emma-davis" },
        { name: "Charan", designation: "Cultral Heads", photo: charan , linkedin: "https://linkedin.com/in/chris-brown" },
      
      ]
    },
    {
      name: "Non Technical Team",
      color: "from-cyan-500",
      borderColor: "cyan",
      members: [
        { name: "Srinija", designation: "Non Technical Team", photo: srija , linkedin: "https://linkedin.com/in/john-smith" },
        { name: "Prathyusha", designation: "Non Technical Team", photo: prathyusha , linkedin: "https://linkedin.com/in/sarah-johnson" },
        { name: "Vaishnavi", designation: "Non Technical Team", photo: vaishnavi , linkedin: "https://linkedin.com/in/mike-wilson" },
      
      
      ]
    },
    {
      name: "Arts & Craft Team",
      color: "from-cyan-500",
      borderColor: "cyan",
      members: [
        { name: "Gangothri", designation: "Arts & Craft Team", photo: "/api/placeholder/400/400" , linkedin: "https://linkedin.com/in/chris-brown" },
        { name: "Namratha", designation: "Arts & Craft Team", photo: namarat , linkedin: "https://linkedin.com/in/john-smith" },
        { name: "Devika", designation: "Arts & Craft Team", photo: devika , linkedin: "https://linkedin.com/in/sarah-johnson" },
        { name: "Uma Devi", designation: "Arts & Craft Team", photo: "/api/placeholder/400/400" , linkedin: "https://linkedin.com/in/mike-wilson" },
        { name: "Swetha G", designation: "Arts & Craft Team", photo: swetha , linkedin: "https://linkedin.com/in/emma-davis" },
        { name: "Deekshita", designation: "Arts & Craft Team", photo: deekshita, linkedin: "https://linkedin.com/in/chris-brown" },
      
      ]
    },



    // ... other teams remain the same ...
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto items-center">
        <h1 className="text-5xl font-bold text-center mb-4 text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          Our Amazing Teams
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Meet the talented individuals who make our company extraordinary
        </p>

        {teams.map((team) => (
          <div key={team.name} className="mb-16">
            <h2 className={`text-3xl font-bold mb-8 text-center bg-gradient-to-r ${team.color} to-white bg-clip-text text-transparent`}>
              {team.name} 
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {team.members.map((member) => (
                <div
                  key={member.name}
                  className="rgb-neon-card relative bg-gray-700/60 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  <div className="relative z-10">
                    <div className="relative">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-64 object-cover  opacity-180"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/90 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-200 mb-1">
                        {member.name}
                      </h3>
                      <p className={`text-${team.borderColor}-400/80 font-medium mb-4 text-white`}>
                        {member.designation}
                      </p>
                      
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400/80 hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        <span className="text-sm">Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes rgbBorder {
          0% { border-color: #ff0000; }
          33% { border-color: #00ff00; }
          66% { border-color: #0000ff; }
          100% { border-color: #ff0000; }
        }

        @keyframes rgbGlow {
          0% { box-shadow: 0 0 2px #ff0000; }
          33% { box-shadow: 0 0 2px #00ff00; }
          66% { box-shadow: 0 0 2px #0000ff; }
          100% { box-shadow: 0 0 2px #ff0000; }
        }

        .rgb-neon-card {
          border: 1px solid transparent;
          position: relative;
          isolation: isolate;
        }

        .rgb-neon-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          padding: 1px;
          border-radius: 12px;
          background: linear-gradient(
            45deg,
            #ff0000,
            #00ff00,
            #0000ff,
            #ff0000
          );
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          background-size: 300%;
          animation: rgbMove 6s linear infinite;
        }

        .rgb-neon-card::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 13px;
          background: transparent;
          animation: rgbGlow 6s linear infinite;
        }

        @keyframes rgbMove {
          0% { background-position: 0% 0; }
          100% { background-position: 300% 0; }
        }

        .rgb-neon-card:hover::before {
          animation: rgbMove 3s linear infinite;
        }

        .rgb-neon-card:hover::after {
          animation: rgbGlow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TeamPage;