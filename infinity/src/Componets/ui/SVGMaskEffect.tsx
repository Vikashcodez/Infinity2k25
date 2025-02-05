import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface MaskContainerProps {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}

const MaskContainer: React.FC<MaskContainerProps> = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updateMousePosition(e);
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  let maskSize = isHovered ? revealSize : size;

  return (
    <div
      ref={containerRef}
      className={cn("h-screen relative", className)}
      style={{
        backgroundColor: isHovered ? "var(--black)" : "var(--white)",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute text-white"
        style={{
          WebkitMaskImage: `url(../../assets/mask.svg)`,
          WebkitMaskPosition: `${
            mousePosition.x !== null ? mousePosition.x - maskSize / 2 : 0
          }px ${mousePosition.y !== null ? mousePosition.y - maskSize / 2 : 0}px`,
          WebkitMaskSize: `${maskSize}px`,
          backgroundColor: "var(--black)",
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
        <div className="max-w-4xl mx-auto text-center text-4xl font-bold relative z-20">
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-white">
        {revealText}
      </div>
    </div>
  );
};

export default MaskContainer;
