import React, { useState, useEffect } from "react";

const AnimatedCard = ({ animation, digit }) => (
  <div className={`absolute w-full h-full bg-blue-500 rounded-lg ${animation}`}>
    <div className="relative w-full h-full flex items-center justify-center text-white text-4xl font-bold">
      {digit}
    </div>
  </div>
);

const StaticCard = ({ position, digit }) => (
  <div className={`absolute w-full h-1/2 ${position} bg-blue-500 flex items-center justify-center text-white text-4xl font-bold rounded-lg`}>
    {digit}
  </div>
);

const FlipCard = ({ digit, prevDigit }) => {
  return (
    <div className="relative w-16 h-24">
      <StaticCard position="top-0" digit={digit} />
      <StaticCard position="bottom-0" digit={prevDigit} />
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <AnimatedCard animation="animate-flip-top origin-bottom" digit={prevDigit} />
        <AnimatedCard animation="animate-flip-bottom origin-top" digit={digit} />
      </div>
      <div className="absolute w-full h-px bg-black opacity-20 top-1/2"></div>
    </div>
  );
};

const CountdownSection = ({ label, value, prevValue }) => {
  const digits = value.toString().padStart(2, "0").split("");
  const prevDigits = prevValue.toString().padStart(2, "0").split("");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {digits.map((digit, index) => (
          <FlipCard key={index} digit={digit} prevDigit={prevDigits[index]} />
        ))}
      </div>
      <div className="text-gray-500 font-bold text-xl">{label}</div>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [prevTimeLeft, setPrevTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-03-22T00:00:00").getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setPrevTimeLeft((prev) => ({ ...prev, ...timeLeft })); // ✅ Correctly update previous time state
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // ✅ Removed `timeLeft` from dependencies to prevent unnecessary re-renders

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-semibold text-center mb-8 text-white">
        INFINITY 2K25 COMING SOON ...
      </h1>
      <div className="flex justify-center items-center gap-4">
        <CountdownSection label="DAYS" value={timeLeft.days} prevValue={prevTimeLeft.days} />
        <div className="text-4xl font-bold text-gray-500">:</div>
        <CountdownSection label="HOURS" value={timeLeft.hours} prevValue={prevTimeLeft.hours} />
        <div className="text-4xl font-bold text-gray-500">:</div>
        <CountdownSection label="MINUTES" value={timeLeft.minutes} prevValue={prevTimeLeft.minutes} />
        <div className="text-4xl font-bold text-gray-500">:</div>
        <CountdownSection label="SECONDS" value={timeLeft.seconds} prevValue={prevTimeLeft.seconds} />
      </div>
    </div>
  );
};

// 🔹 Add these animations to your Tailwind config (tailwind.config.js)
const styles = {
  theme: {
    extend: {
      keyframes: {
        "flip-top": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-180deg)" },
        },
        "flip-bottom": {
          "0%": { transform: "rotateX(180deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
      animation: {
        "flip-top": "flip-top 0.6s ease-in",
        "flip-bottom": "flip-bottom 0.6s ease-in",
      },
    },
  },
};

export default CountdownTimer;
