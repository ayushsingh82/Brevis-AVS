import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      className="pt-0 pb-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-hidden h-screen w-screen"
    >
      <div className="container mx-auto px-4">
        <div className="md:flex items-center justify-between">
          {/* Left Section - Text and Buttons */}
          <div className="md:w-[478px]">
            <div className="tag text-black mt-[100px]">Version 1.0 is here</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-blue-700 via-blue-500 to-blue-500 text-transparent bg-clip-text mt-6">
              Seamless Transactions, Maximum Benefits!
            </h1>
            <p className="text-xl text-black tracking-tight mt-6">
              Making hooks easy for all with Brevis x Uniswap
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

          {/* Right Section - Animated Images */}
          <motion.div
            className="flex items-center gap-4 md:w-[478px] md:mt-[30px]"
            initial={{ x: 300, opacity: 0 }}  // Start off-screen to the right
            animate={{ x: 0, opacity: 1 }}    // Slide in from the right
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }} // Delay for initial animation
          >
            {/* Brevis Image */}
            <motion.img
              src="https://getcelerapp.s3.us-west-1.amazonaws.com/brevis-website/images/logo.svg"
              alt="Brevis Logo"
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
            
            {/* Uniswap Image */}
            <motion.img
              src="https://cryptologos.cc/logos/uniswap-uni-logo.svg"
              alt="Uniswap Logo"
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
          </motion.div>
        </div>
        
        <div className="relative mt-10">
          <motion.div
            className="flex gap-10"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 12,  // Adjust speed here
              ease: 'linear'
            }}
          >
            <img
              src="https://www.optimism.io/optimism.svg"
              alt="Optimism Logo"
              className="h-12 w-36"
            />
            <img
              src="https://www.base.org/_next/static/media/logo.f6fdedfc.svg"
              alt="Base Logo"
              className="h-12 w-auto"
            />
            <img
              src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024"
              alt="Ethereum Logo"
              className="h-12 w-auto"
            />
            <img
              src="https://cryptologos.cc/logos/aptos-apt-logo.svg?v=024"
              alt="Aptos Logo"
              className="h-12 w-auto"
            />
            <img
              src="https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=024"
              alt="Arbitrum Logo"
              className="h-12 w-auto"
            />
            <img
              src="https://cryptologos.cc/logos/polygon-matic-logo.svg?v=024"
              alt="Polygon Logo"
              className="h-12 w-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
