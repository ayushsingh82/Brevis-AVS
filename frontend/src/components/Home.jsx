import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      className="pt-0 pb-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip h-screen w-screen"
    >
      <div className="container mx-auto px-4">
        <div className="md:flex items-center justify-between">
          
          {/* Left Section - Text and Buttons */}
          <div className="md:w-[478px]">
            <div className="tag text-black mt-[100px]">Version 1.0 is here</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-blue-700 via-blue-500 to-blue-500 text-transparent bg-clip-text mt-6">
            Confidential Trade Data powered by  
            <motion.div
            className="md:w-[478px] md:mt-[30px] "
            initial={{ x: 300, opacity: 0 }}  // Start off-screen to the right
            animate={{ x: 0, opacity: 1 }}    // Slide in from the right
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }} // 2-second delay for initial animation
          >
            {/* Infinite Y-axis up and down movement */}
            <motion.img
    src="https://getcelerapp.s3.us-west-1.amazonaws.com/brevis-website/images/logo.svg"
    alt="Aligned Layer Image"
    className="rounded-lg shadow-md h-[100px] w-[200px] bg-transparent invert"
    animate={{ 
      y: [-10, 10, -10],  // Moves 10px up and down
    }}
    transition={{ 
      repeat: Infinity,    // Infinite loop
      duration: 5,         // Duration for the full loop
      ease: 'easeInOut',   // Smooth easing
    }}
  />

  <motion.img
  src="https://cryptologos.cc/logos/uniswap-uni-logo.svg"
  alt="Aligned Layer Image"
  className="rounded-lg shadow-md h-[100px] w-[200px] bg-transparent "
  animate={{ 
    y: [-10, 10, -10],  // Moves 10px up and down
  }}
  transition={{ 
    repeat: Infinity,    // Infinite loop
    duration: 5,         // Duration for the full loop
    ease: 'easeInOut',   // Smooth easing
  }}
/>

          </motion.div>
            </h1>
            <p className="text-xl text-black tracking-tight mt-6">
             Making privacy easy for all
            </p>
            <div className="flex gap-3 items-center mt-[30px]">
              <a href="">
                <button className="btn btn-primary px-5 py-3 bg-black text-white rounded-md">Get Started</button>
              </a>
              <button className="btn btn-text gap-1 px-5 py-3 bg-transparent text-black border-black border rounded-md">
                <span>Learn more</span>
                <svg
                  className="h-5 w-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>

          </div>

          {/* Right Section - Animated Image */}
          <motion.div
            className="md:w-[478px] md:mt-[30px] "
            initial={{ x: 300, opacity: 0 }}  // Start off-screen to the right
            animate={{ x: 0, opacity: 1 }}    // Slide in from the right
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }} // 2-second delay for initial animation
          >
            {/* Infinite Y-axis up and down movement */}
            <motion.img
src="https://cryptologos.cc/logos/uniswap-uni-logo.svg"
    alt="Aligned Layer Image"
    className="rounded-lg shadow-md h-[100px] w-[200px] bg-transparent"
    animate={{ 
      y: [-10, 10, -10],  // Moves 10px up and down
    }}
    transition={{ 
      repeat: Infinity,    // Infinite loop
      duration: 5,         // Duration for the full loop
      ease: 'easeInOut',   // Smooth easing
    }}
  />
  <motion.img
  src="https://getcelerapp.s3.us-west-1.amazonaws.com/brevis-website/images/logo.svg"
  alt="Aligned Layer Image"
  className="rounded-lg shadow-md h-[100px] w-[200px] bg-transparent invert"
  animate={{ 
    y: [-10, 10, -10],  // Moves 10px up and down
  }}
  transition={{ 
    repeat: Infinity,    // Infinite loop
    duration: 5,         // Duration for the full loop
    ease: 'easeInOut',   // Smooth easing
  }}
/>


          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;