import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WalletModal } from './WalletModal';

export function Navbar() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Activity className="w-8 h-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">ActiVerse</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/events" className="text-gray-600 hover:text-gray-900">Events</Link>
              <Link to="/activities" className="text-gray-600 hover:text-gray-900">Activities</Link>
              <Link to="/collection" className="text-gray-600 hover:text-gray-900">NFT Collection</Link>
              <Link to="/impact" className="text-gray-600 hover:text-gray-900">Impact</Link>
              <Link to="/community" className="text-gray-600 hover:text-gray-900">Community</Link>
              <button 
                onClick={() => setIsWalletModalOpen(true)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <WalletModal 
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </>
  );
}