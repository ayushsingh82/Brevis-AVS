import React from 'react';

const TradingFee = () => {
  return (
    <section className="pt-10 pb-20 md:pb-10 px-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip min-h-screen w-screen">
      <h1 className="text-3xl font-bold text-blue-500 text-center mb-6">Fee Adjustment Hook</h1>
      
      <div className="text-black max-w-2xl mx-auto text-lg mb-10">
        <p className="mb-4">
          The <strong>Fee Adjustment Hook</strong> dynamically adjusts trading fees based on a user's trading behavior. This approach incentivizes high-frequency traders with reduced fees, fostering engagement and loyalty.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <img 
          src="../../public/FeeAdjustment.png"  // Replace with the correct image path if different
          alt="Diagram showing Fee Adjustment flow" 
          className="max-w-full rounded-md shadow-lg h-[300px] w-[600px]" 
        />
      </div>

      <div className="text-black max-w-2xl mx-auto text-lg space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
        
        {/* Feature Boxes */}
        <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
          <h3 className="text-xl font-semibold mb-2">1. Order Placement</h3>
          <p>Traders place an order and submit proof of their trading history as part of the process.</p>
        </div>

        <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
          <h3 className="text-xl font-semibold mb-2">2. Verification Process</h3>
          <p>The <strong>Fee Adjustment Hook</strong> checks historical trading activity to determine the appropriate fee rate for the user.</p>
        </div>

        <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
          <h3 className="text-xl font-semibold mb-2">3. Fee Rate Adjustment</h3>
          <p>Based on the trading behavior, eligible high-frequency traders are offered a reduced fee rate (e.g., 5%), while regular traders have a standard fee (e.g., 1%).</p>
        </div>
      </div>
    </section>
  );
};

export default TradingFee;
