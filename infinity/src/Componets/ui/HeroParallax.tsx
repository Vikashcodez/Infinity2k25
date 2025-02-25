import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : 15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : 20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? -200 : -700, isMobile ? 200 : 500]),
    springConfig
  );

  if (isMobile) {
    return (
      <div className="min-h-screen bg-neutral-900 px-4 py-20">
        <Header />
        <div className="grid grid-cols-1 gap-6 mt-10">
          {products.map((product) => (
            <MobileProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="w-full"
      >
        <motion.div className="flex flex-row-reverse gap-20 mb-20 px-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row gap-20 mb-20 px-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse gap-20 px-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
      <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br className="hidden md:block" /> INFINITY 2K25 Gallery
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 mx-auto md:mx-0"></p>
    </div>
  );
};

const MobileProductCard = ({ product }: { product: { title: string; thumbnail: string } }) => {
  return (
    <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
      <img
        src={product.thumbnail}
        className="w-full h-full object-cover"
        alt={product.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
    </div>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      
      className="group/product h-[450px] w-[450px] relative flex-shrink-0"
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <img
          src={product.thumbnail}
          className="h-full w-full object-cover"
          alt={product.title}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover/product:opacity-30 transition-opacity duration-300" />
        
      </div>
    </motion.div>
  );
};

export default HeroParallax;