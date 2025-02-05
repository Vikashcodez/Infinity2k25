import { useState, useRef, useEffect, Suspense } from "react";
import "../App.css";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "../Componets/Scene";
import OUWhiteLogo from "../assets/OUWhiteLogo.png";
import { SpotLight } from "./ui/SpotLight";

gsap.registerPlugin(ScrollTrigger);

function App() {
 const mainRef = useRef(null)
 const sceneRef = useRef(null)
 const [progress, setProgress] = useState(0)

 useEffect(() => {
   gsap.timeline({
     scrollTrigger: {
       trigger: mainRef.current,
       start: 'top top',
       end: 'bottom bottom',
       scrub: 1,
       onUpdate: (self) => {
         setProgress(self.progress)
       }
     }
   })
  
   .to(sceneRef.current, {
     ease: 'none',
     x: '-50vw',
     y: '100vh'
   })
   .to(sceneRef.current, {
     ease: 'none',
     x: '-10vw',
     y: '200vh'
   })
   .to(sceneRef.current, {
     ease: 'none',
     x: '-50vw',
     y: '300vh'  
   })
 }, []);

 return (
   <main ref={mainRef} className=" overflow-x-hidden">
    <SpotLight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
     <Suspense
       fallback={
         <div className="fixed inset-0 grid place-items-center bg-black text-white">
           Loading...
         </div>
       }
     >
       <section className="relative h-[100vh]">
         <p className="text-white text-center absolute right-1/2 left-0 top-1/2 -translate-y-1/2 w-[50%] px-4 text-4xl font-semibold">
         <h2 className="inline">Department of</h2>
        <br />
        <h1 className="inline">
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Computer Science & Engineering
          </span>{" "}
        </h1>{" "}
         </p>
         
         <div ref={sceneRef} className="absolute right-0 h-[100vh] w-[50vw]">
           <Canvas>
             <Scene progress={progress} />
           </Canvas>
         </div>
       </section>

       <section className="relative flex items-center justify-evenly h-[100vh]">
         <p className="w-[50%] border-0 border-red-700"></p>

         <p className="text-white w-[50%] text-center px-4 text-4xl font-semibold">
         <div className="flex justify-center items-center">
          <img src={OUWhiteLogo} alt="Osmania University Logo" />
        </div>
         </p>
       </section>

       <section className="relative flex items-center justify-evenly h-[100vh]">
         <p className="text-white order-1 w-[50%] text-center px-4 text-4xl font-semibold">
         <main className="text-3xl font-bold">Presents</main>
         </p>
         <p className="w-[50%] order-2"></p>
       </section>

       <section className="relative flex items-center justify-evenly h-[100vh]">
         <p className="w-[50%] border-0 border-red-700"></p>

         <p className="text-white w-[50%] text-center px-4  ">
         <div className="flex flex-col items-center justify-center">
            <div className="text-6xl font-sans font-extrabold lg:text-9xl mt-3">
              INFINITY
              <br />
              2K25
            </div>
            <div></div>
          </div>
         </p>
       </section>
     </Suspense>
   </main>
 );
}

export default App;