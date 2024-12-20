import React from 'react';

const UserGated = () => {
  return (
    <section className="pt-10 pb-20 md:pb-10 px-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip min-h-screen w-screen">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">User-Gating Hook</h1>
      
      <div className="text-black max-w-2xl mx-auto text-lg mb-10 text-center">
        <p className="mb-4">
          The <strong>User-Gating Hook</strong> is designed to grant exclusive access to certain features based on users' historical behavior. This functionality encourages loyalty by rewarding users who engage consistently.
        </p>
      </div>

      {/* Two-column layout for How It Works and Image */}
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-8">
        
        {/* Left Column - How It Works Section */}
        <div className="text-black max-w-lg space-y-6 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">How It Works</h2>
          
          {/* Feature Boxes */}
          <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">1. Proof Submission</h3>
            <p>Users submit proof of eligibility based on their historical interactions with the platform.</p>
          </div>

          <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">2. Verification Process</h3>
            <p>The <strong>User-Gating Hook</strong> verifies this proof, checking if the user meets eligibility criteria based on past behavior.</p>
          </div>

          <div className="bg-blue-500 text-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">3. Access Granted</h3>
            <p>Eligible users gain access to exclusive features, encouraging further engagement and rewarding loyalty.</p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="/UserGated.png"
            alt="Diagram showing User-Gating flow" 
            className="max-w-full rounded-md shadow-lg h-[300px] w-[600px]" 
          />
        </div>
      </div>
    </section>
  );
};

export default UserGated;
