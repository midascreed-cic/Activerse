import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3 } from '../contexts/Web3Context';

export function Navigation() {
  const { account, connect } = useWeb3();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-emerald-600">
                Activerse
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/events"
                className="border-transparent text-gray-500 hover:border-emerald-500 hover:text-emerald-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Events
              </Link>
              <Link
                to="/activities"
                className="border-transparent text-gray-500 hover:border-emerald-500 hover:text-emerald-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Activities
              </Link>
              <Link
                to="/nft-collection"
                className="border-transparent text-gray-500 hover:border-emerald-500 hover:text-emerald-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                NFT Collection
              </Link>
              <Link
                to="/community"
                className="border-transparent text-gray-500 hover:border-emerald-500 hover:text-emerald-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Community
              </Link>
              <Link
                to="/qr-scanner"
                className="border-transparent text-gray-500 hover:border-emerald-500 hover:text-emerald-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Claim NFT
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {account ? (
              <span className="text-sm text-gray-500">
                {account.slice(0, 6)}...{account.slice(-4)}
              </span>
            ) : (
              <button
                onClick={connect}
                className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 