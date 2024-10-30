import React, { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className=''>
      <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-black'>
        <div className='font-semibold text-xl text-white'>
          <a href='/'>Brevis</a>
        </div>
        <div className='flex justify-center flex-1 space-x-8 text-center'>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="font-medium text-sm  ml-[40px] border border-2 border-blue-600 px-[4px] py-[2px] bg-blue-600 text-white text-lg">
            Select Hook
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              <a href='/user-gated' className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>UserGated </a>
              <a href='/trading-fee' className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>TradingFee </a>
              <a href='/wallet-recovery' className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>WalletRecovery </a>
              <a href='/loyalty-retention' className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>LoyaltyRetention </a>
              <a href='/active-liquidity' className='block px-4 py-2 text-gray-700 hover:bg-gray-200'>ActiveLiquidity </a>
            </div>
          )}
        </div>
      </div>
      <hr className='border-t border-blue-600' />
    </nav>
  );
}

export default Navbar;
