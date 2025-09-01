import React from 'react';
import { BRANCHES } from '../constants';

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 text-amber-500">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);


const BranchCard: React.FC<{ branch: typeof BRANCHES[0] }> = ({ branch }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
        <h3 className="text-2xl font-bold text-amber-500 mb-2">{branch.city} - {branch.name}</h3>
        <p className="text-gray-300 flex items-center">
            <MapPinIcon />
            {branch.address}
        </p>
    </div>
);


const Branches: React.FC = () => {
  return (
    <section id="branches" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Şubelerimiz</h2>
            <p className="text-gray-400">Size en yakın ACIKTIM'ı bulun.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BRANCHES.map((branch) => (
                <BranchCard key={branch.id} branch={branch} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;