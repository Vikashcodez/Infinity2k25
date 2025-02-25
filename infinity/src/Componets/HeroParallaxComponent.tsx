import HeroParallax from "./ui/HeroParallax";
import img1 from '../assets/Gallery/img39.jpeg'
import img2 from '../assets/Gallery/img37.jpeg'
import img3 from '../assets/Gallery/img38.jpeg'
import img4 from '../assets/Gallery/img36.jpeg'
import img5 from '../assets/Gallery/img5.jpg'
import img6 from '../assets/Gallery/img6.jpg'
import img7 from '../assets/Gallery/img7.jpg'
import img8 from '../assets/Gallery/img8.png'
import img9 from '../assets/Gallery/img9.jpg'
import img10 from '../assets/Gallery/img10.jpg'
import img11 from '../assets/Gallery/img11.jpg'
import img12 from '../assets/Gallery/img12.jpg'
import img13 from '../assets/Gallery/img13.jpg'
import img14 from '../assets/Gallery/img35.jpeg'
import img15 from '../assets/Gallery/img34.jpeg'



function HeroParallaxComponent() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: "Moonbeam",
    link: " ",
    thumbnail:
      img1,
  },
  {
    title: " ",
    link: "",
    thumbnail:
      img2,
  },
  {
    title: "Rogue",
    link: "",
    thumbnail:
      img3,
  },

  {
    title: "Editorially",
    link: "",
    thumbnail:
      img4,
  },
  {
    title: "Editrix AI",
    link: "",
    thumbnail:
      img5,
  },
  {
    title: "Pixel Perfect",
    link: "",
    thumbnail:
      img6,
  },

  {
    title: "Algochurn",
    link: "",
    thumbnail:
      img7,
  },
  {
    title: "Aceternity UI",
    link: "",
    thumbnail:
      img8,
  },
  {
    title: "Tailwind Master Kit",
    link: " ",
    thumbnail:
      img9,
  },
  {
    title: "SmartBridge",
    link: " ",
    thumbnail:
      img10,
  },
  {
    title: "Renderwork Studio",
    link: " ",
    thumbnail:
      img11,
  },

  {
    title: "Creme Digital",
    link: " ",
    thumbnail:
      img12,
  },
  {
    title: "Golden Bells Academy",
    link: " ",
    thumbnail:
      img13,
  },
  {
    title: "Invoker Labs",
    link: " ",
    thumbnail:
      img14,
  },
  {
    title: "E Free Invoice",
    link: " ",
    thumbnail:
      img15,
  },
];

export default HeroParallaxComponent;
