import React from 'react';

const LocationPages: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Location Pages
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Location-specific casino content will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationPages;