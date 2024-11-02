import React from 'react';

const ActiveLiquidity = () => {
  return (
    <section className="pt-10 pb-20 md:pb-10 px-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip min-h-screen w-screen">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Active Liquidity Management Hook</h1>
      
      <div className="text-black max-w-2xl mx-auto text-lg mb-10 text-center">
        <p className="mb-4">
          The <strong>Active Liquidity Management Hook</strong> dynamically manages market liquidity by adjusting the available liquidity in response to market conditions, as verified by Brevis zk-proofs. This system ensures efficient and trust-free liquidity adjustments based on real-time activity.
        </p>
      </div>

      {/* Two-column layout for How It Works and Image */}
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-8">
        
        {/* Left Column - How It Works Section */}
        <div className="text-black max-w-lg space-y-6 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">How It Works</h2>
          
          {/* Feature Boxes */}
          <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">1. Trigger Events</h3>
            <p>Market activities such as high volatility or trade volume act as triggers for adjusting liquidity levels.</p>
          </div>

          <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">2. Liquidity Evaluation</h3>
            <p>The <strong>Liquidity Management Hook</strong> evaluates current conditions using Brevis zk-proofs to ensure that adjustments are based on verified market events.</p>
          </div>

          <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">3. Liquidity Adjustment</h3>
            <p>Depending on the evaluation, liquidity is either added or removed from the market, optimizing efficiency and maintaining balance.</p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="/LiquidityManagement.png"  // Replace with the correct image path if different
            alt="Diagram showing Active Liquidity flow" 
            className="max-w-full rounded-md shadow-lg h-[300px] w-[600px]" 
          />
        </div>
      </div>
    </section>
  );
};

export default ActiveLiquidity;
