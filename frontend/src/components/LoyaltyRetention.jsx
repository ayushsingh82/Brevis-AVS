import React from 'react';

const LoyaltyRetention = () => {
  return (
    <section className="pt-10 pb-20 md:pb-10 px-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip min-h-screen w-screen">
      <h1 className="text-3xl font-bold text-blue-500 text-center mb-6">Loyalty Retention Hook</h1>
      
      <div className="text-black max-w-2xl mx-auto text-lg mb-10">
        <p className="mb-4">
          The <strong>Loyalty Reward Hook</strong> rewards users for their engagement by tracking loyalty points based on their activity on the platform. This system encourages users to interact more frequently, promoting long-term engagement and retention.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <img 
          src="../../public/LoyaltyReward.png"  // Replace with the correct image path if different
          alt="Diagram showing Loyalty Reward flow" 
          className="max-w-full rounded-md shadow-lg h-[300px] w-[600px]" 
        />
      </div>

      <div className="text-black max-w-2xl mx-auto text-lg space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
        
        {/* Feature Boxes */}
        <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
          <h3 className="text-xl font-semibold mb-2">1. Engagement Tracking</h3>
          <p>As users engage with the platform, their activities are tracked to monitor loyalty behaviors.</p>
        </div>

        <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
          <h3 className="text-xl font-semibold mb-2">2. Loyalty Points Calculation</h3>
          <p>The <strong>Loyalty Reward Hook</strong> calculates loyalty points based on the user’s level of engagement, rewarding them with points for each interaction.</p>
        </div>

        <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
          <h3 className="text-xl font-semibold mb-2">3. Points Redemption</h3>
          <p>Users can redeem these loyalty points for discounts or perks, encouraging ongoing platform interaction and enhancing loyalty.</p>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyRetention;