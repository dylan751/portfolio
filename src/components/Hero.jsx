import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { cv, zuong } from '../assets';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-between`}
      >
        {!isMobile &&
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>}

        <div className="flex flex-col h-5/6">
          <div>
            <h1 className="font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[98px] mt-2 text-white">
              Hi, I'm <span className="text-[#915eff]">Zuong</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop web applications, <br className="sm:block hidden" /> Cloud services and Blockchain Web3.0
            </p>
            <a
              href={cv}
              className="absolute bg-secondary hover:bg-tertiary inline-block mt-8 py-3 px-8 outline-none w-fit text-tertiary hover:text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer z-30"
              download
            >
              Download CV
            </a>
          </div>

          <ComputersCanvas />
        </div>

        {!isMobile && <img src={zuong} alt="zuong" className="h-5/6 w-auto object-contain inline rounded-tl-3xl rounded-br-3xl" />}
      </div>


      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
