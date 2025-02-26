import React, { useState } from "react";
import { X, Calendar, DollarSign, Book, Users } from "lucide-react";
import infy from '../assets/Events/infy.png'
import techtac from '../assets/Events/3.png'
import technothr from '../assets/Events/5.png'
import puzzle from '../assets/Events/10.png'
import dsa from '../assets/Events/8.png'
import escape from '../assets/Events/2.png'
import aipct from '../assets/Events/7.png'
import techtrai from '../assets/Events/9.png'
import decrpt from '../assets/Events/4.png'
import drama from '../assets/Events/6.png'

const EventCard = ({ event, onClick, index }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className="flex w-full items-center justify-center mb-8">
      {/* Content wrapper */}
      <div className={`w-full md:w-[45%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
        <div
          onClick={() => onClick(event)}
          className="group cursor-pointer relative mx-4"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800">
            {/* Image section */}
            <div className="relative h-48">
              <img
                src={event.image || "/api/placeholder/400/300"}
                alt={event.name}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-2">
                  {event.type}
                </span>
              </div>
            </div>

            {/* Content section */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                {event.name}
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-3">
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <DollarSign className="h-4 w-4 text-green-400" />
                  <span>{event.fee}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Users className="h-4 w-4 text-purple-400" />
                  <span>{event.capacity} seats</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm line-clamp-2">{event.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left shadow-xl transition-all border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-500/10"></div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-800 text-gray-400 hover:text-gray-200 transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

const EventModal = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          {event.name}
        </h2>

        <div className="rounded-xl overflow-hidden mb-6 relative">
          <img
            src={event.image || "/api/placeholder/400/300"}
            alt={event.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
            <Calendar className="text-blue-400" />
            <div>
              <div className="text-sm text-gray-400">Date</div>
              <div className="text-gray-200">{event.date}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
            <DollarSign className="text-green-400" />
            <div>
              <div className="text-sm text-gray-400">Fee</div>
              <div className="text-gray-200">{event.fee}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
            <Users className="text-purple-400" />
            <div>
              <div className="text-sm text-gray-400">Capacity</div>
              <div className="text-gray-200">{event.capacity} participants</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
            <Book className="text-pink-400" />
            <div>
              <div className="text-sm text-gray-400">Type</div>
              <div className="text-gray-200">{event.type}</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
            <h4 className="text-lg font-semibold mb-2 text-gray-200">About Event</h4>
            <p className="text-gray-400">{event.description}</p>
          </div>

          <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
            <h4 className="text-lg font-semibold mb-2 text-gray-200">Event Rules</h4>
            <ul className="space-y-2 text-gray-400">
              {event.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
  onClick={() => window.open(event.registrationLink, "_blank")}
  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
>
  Register Now
</button>

      </div>
    </Modal>
  );
};

const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const events = [
    {
      id: 1,
      name: "InfyHunt",
      date: "March 21, 2025",
      fee: "Rs 350 per team",
      capacity: 100,
      type: "Competition",
      description: "Infy Hunt is an exciting, clue-based scavenger challenge that tests problem-solving, teamwork, and quick decision-making. Teams must navigate through various departments by solving puzzles, locating hidden envelopes, and racing against time to complete the hunt. The fastest team to finish wins! Event Structure: Round 1 - Treasure Hunt Teams receive an initial clue that leads them to a specific department. Upon arrival, they must solve a question to discover the location of a hidden envelope. The envelope contains the key to their next destination. This continues until the team finds the final envelope. The team that completes the hunt in the shortest time wins. Bonus Round - The Time Advantage Teams can participate in an optional bonus challenge to reduce their total completion time. They can choose questions from three difficulty levels: Easy, Medium, and Hard. Successfully solving these questions grants a time deduction, with harder questions offering a greater reduction. This gives teams a strategic advantage over their competitors. The team that completes the hunt with the shortest adjusted time emerges as the winner!",
      rules: ["Max team size: 4", "No external libraries allowed"],
      image: infy,
      registrationLink: "/infyhunt"
    },
    {
      id: 2,
      name: "Tech Tac Toe",
      date: "March 15, 2025",
      fee: "Rs 150 per team",
      capacity: 50,
      type: "Competition",
      description: "ROUND 1: Tic Tac Toe meets quiz! With very basic Questions. Mark ❌ or ⭕ only when you answer the quiz question correctly! ✔\nROUND 2: Snake and Ladder 🐍🪜 infused with tech quizzes! Answer questions, roll the dice 🎲 🍀, climb ladders 🪜, but watch out for snakes 🐍!",
      rules: ["Basic Python knowledge recommended"],
      image: techtac,
      registrationLink: "/tech-tac-toe"
    },
    {
      "id": 3,
      "name": "Techno Throne",
      "date": "March 15, 2025",
      "fee": "Rs 150",
      "capacity": 50,
      "type": "Competition",
      "description": "Technothrone: The Ultimate High-Stakes Quiz\n\nTechnothrone isn’t just another quiz—it’s a battle of strategy, risk, and knowledge!\n\nAt the start, each player is given a fixed amount of points or coins. With every round, you’ll face a multiple-choice question. But here’s the twist: you must bet your points on the answer you believe is correct!\n\n✅ Guess right? You win all the points wagered by others.\n❌ Guess wrong? You lose your bid.\n\nIf there are multiple winners, the highest bidder takes it all.\n\nAfter a series of intense rounds, the player with the most points remaining claims the throne as the ultimate champion.\n\nDo you have the knowledge, the nerve, and the strategy to conquer Technothrone? Place your bets and find out!",
      "rules": ["Bring a laptop", "Basic Python knowledge recommended"],
      "image": technothr,
      "registrationLink": "/techno"
    },
    {
      id: 4,
      name: "Puzzle Bit",
      date: "March 15, 2025",
      fee: "Rs 150 per team",
      capacity: 50,
      type: "Competition",
      description: "Puzzle Bit is an exciting, fast-paced challenge that tests your logic, coding, and puzzle-solving skills. In Round 1, teams will tackle a mix of emojis, tech riddles, programming trivia, and puzzles, racing against time to earn points. In Round 2, they will decode technical clues to solve the Ultimate Tech Crossword, where speed is key-the fastest teams to finish will claim victory!",
      rules: ["Team size: 2 members"],
      image: puzzle,
      registrationLink: "/puzzlebit"
    },
    {
      id: 5,
      name: "Dsa Flag",
      date: "March 15, 2025",
      fee: "Rs 150 per Team",
      capacity: 50,
      type: "Competition",
      description: "A thrilling coding contest where participants solve DSA-based challenges. Show off your problem-solving skills and climb the leaderboard!",
      rules: ["Bring a laptop", "Basic DSA knowledge required"],
      image: dsa,
      registrationLink: "/dsa-flag"
    },
    {
      id: 6,
      name: "Escape Room",
      date: "March 15, 2025",
      fee: "Rs 75 Per team",
      capacity: 50,
      type: "Competition",
      description: "A notorious hacker has been found dead—right after uncovering a dark secret that someone wanted buried forever. Was it revenge? A cover-up? Or something far more sinister? As elite investigators, your mission is twofold: unravel the mystery and escape before time runs out. You have 20 minutes to examine clues, decode messages, and uncover the killer’s identity. 4 suspects. 1 murderer. Can you crack the case before it's too late? Or will the truth remain hidden in the shadows? ",
      rules: ["Team size: 1-4 members", "Time limit: 20 minutes"],
      image: escape,
      registrationLink: "/escape-room"
    },
    {
      id: 7,
      name: "AI Pictionary",
      date: "March 15, 2025",
      fee: "RS 150 Per team",
      capacity: 50,
      type: "Competition",
      description: "Guess the tech term using AI-generated drawings! A fun and fast-paced competition where creativity meets technology. ",
      rules: ["Bring a laptop","1st prize-1000","2nd prize-600","3rd prize-400"],
      image: aipct,
      registrationLink: "/ai-pict"
    },
    {
      id: 8,
      name: "Tech Triathlon",
      date: "March 15, 2025",
      fee: "Free",
      capacity: 50,
      type: "Competition",
      description: "No coding skills required Event Rounds: 1. Generate & Represent: Utilize a Gen AI tool to create team images and names reflecting your tech prowess. Unleash your creativity! 2. AI Quiz Challenge: Test your knowledge with a challenging quiz covering various aspects of Generative AI. Explore prompts, models, and advancements in the field. 3. Prompt Engineering Showcase: This round tests your prompt engineering skills.You will be given a set of requirements for which you should design a web page using an ai model like Chat-Gpt.",
      rules: ["Bring a laptop"],
      image: techtrai,
      registrationLink: "/tech-trai"
    },
    {
      id: 9,
      name: "Decryptors Assemble",
      date: "March 15, 2025",
      fee: "Rs 150 per team",
      capacity: 50,
      type: "Competition",
      description: [
        "A thrilling cybersecurity and cryptography challenge! Decrypt hidden messages, crack codes, and prove your hacking skills!",
        
        "A fast-paced, relay-style logic and cryptography challenge where teams solve interlinked puzzles.",
        "Each player's solution unlocks the next step, leading to a final decryption battle.",
       
      ],
      rules: ["Game Structure:","Player 1 – Decoding Challenge:","Solves a coding problem (e.g., finding output, debugging).","The output determines the question number for Player 2.","Player 2 – Decoding Challenge:","Solves the indicated problem.","The output acts as a key to decrypt a cipher text in the final challenge.","Final Step –","Team Cryptography Challenge:","Both players use the key from Step 2 to decrypt and solve the final challenge together.","The team that takes the minimum time to solve it wins!"],
      image: decrpt,
      registrationLink: "/Decrpt"
    },
    {
      id: 10,
      name: "Drama Tech",
      date: "March 15, 2025",
      fee: "Rs 150 per team",
      capacity: 50,
      type: "Competition",
      description: "🔹 \"Act it, guess it, and tech your way to victory!\" 🎬💻Do you have what it takes to blend drama with technology? DramaTech is a one-of-a-kind challenge where creativity meets technical knowledge! Bring out your inner performer and race against time to guess tech terms through expressive enacting. 🏆 How It Works: 🔥 Round 1 - Tech Charades 🎭 👉 One team member will act out specific technical phrases (like from DSA, Java, C, etc) using gestures, expressions, and creativity—no words spelling or writing allowed! 👉 Here is the twist you will be given question, first you need to find answer and then enact it. 👉 The other teammate must guess the correct word based on the performance.👉 If stuck, a clue will be provided, but use it wisely! 👉 Teams that successfully guess all the given words qualify for the next round. 💡 Think fast, act smart, and bring your tech knowledge to life! ⚡ Round 2 - Rapid Fire Showdown ⏳ 🚀 The pressure is on! In this final round: ✅ Teams will have a limited time to guess as many technical phrases (like from DSA, Java, C, etc) as possible. ✅ Just pure quick acting and rapid guessing! you will be given the phrase directly. ✅ The team with the most correct guesses within the time limit will be crowned the DramaTech Champions! 🏆 💡 \"Master the art of expression, decode the clues, and claim the victory!\" 🎭💻🚀 Are you ready to put your acting, logic, and tech knowledge to the test? Sign up now and tech it to the top! 🔥💡🎬",
      rules: ["Team size: 2 members"],
      image: drama,
      registrationLink: "/Drama-tech"
    }
];
  

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Upcoming Events
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our community events and enhance your skills with hands-on workshops,
            competitions, and learning sessions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {/* Timeline dots */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
          
          {/* Events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={(event) => {
                  setSelectedEvent(event);
                  setIsModalOpen(true);
                }}
                index={index}
              />
            ))}
          </div>
          
          {/* Bottom timeline dot */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-4 rounded-full bg-purple-500"></div>
        </div>
      </div>

      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
      />
    </div>
  );
};

export default EventPage;