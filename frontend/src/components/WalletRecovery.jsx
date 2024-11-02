import React from 'react';

const WalletRecovery = () => {
  return (
    <section className="pt-10 pb-20 md:pb-10 px-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip min-h-screen w-screen">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Wallet Recovery Hook</h1>
      
      <div className="text-black max-w-2xl mx-auto text-lg mb-10 text-center">
        <p className="mb-4">
          The <strong>Wallet Recovery Hook</strong> provides a secure way for users to recover their wallets by verifying their identity and historical on-chain behavior. This method enhances user trust by adding an extra layer of security.
        </p>
      </div>

      {/* Two-column layout for How It Works and Image */}
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-8">
        
        {/* Left Column - How It Works Section */}
        <div className="text-black max-w-lg space-y-6 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">How It Works</h2>
          
          {/* Feature Boxes */}
          <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">1. Identity Verification</h3>
            <p>The wallet owner submits proof of their identity and on-chain activity as part of the recovery process.</p>
          </div>

          <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">2. Eligibility Verification</h3>
            <p>The <strong>Wallet Recovery Hook</strong> checks the submitted proof to confirm that the user meets the criteria for wallet recovery.</p>
          </div>

          <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">3. Secure Wallet Recovery</h3>
            <p>If the verification is successful, the user can securely recover their wallet, enhancing trust and security within the platform.</p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="/WalletRecovery.png"  // Replace with the correct image path if different
            alt="Diagram showing Wallet Recovery flow" 
            className="max-w-full rounded-md shadow-lg h-[300px] w-[600px]" 
          />
        </div>
      </div>
    </section>
  );
};

export default WalletRecovery;
