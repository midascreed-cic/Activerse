import React, { useState } from 'react';
import { Activity, CreditCard, Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WalletModal } from './WalletModal';
import { useWeb3 } from '../../contexts/Web3Context';

export function Navbar() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { account, balance, chainId } = useWeb3();

  const getNetworkName = (chainId: number) => {
    switch (chainId) {
      case 1: return 'Mainnet';
      case 5: return 'Goerli';
      case 11155111: return 'Sepolia';
      default: return `Chain ${chainId}`;
    }
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-6 group">
              <div className="relative w-14 h-14">
                <div className="absolute -inset-2 bg-emerald-400/20 rounded-3xl blur-lg group-hover:bg-emerald-400/30 transition duration-300"></div>
                <div className="relative w-full h-full bg-[#0A1121] rounded-2xl ring-1 ring-emerald-500/30 overflow-hidden shadow-xl">
                  <img 
                    src="/images/logo1.jpeg" 
                    alt="Activerse Logo" 
                    className="w-full h-full object-cover p-0.5"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-[#40E0D0] to-[#9370DB] bg-clip-text text-transparent tracking-wide">ActiVerse</span>
                <span className="text-base text-gray-400 tracking-wider">Web3 Impact Platform</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/events" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Events</Link>
              <Link to="/activities" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Activities</Link>
              <Link to="/nft-collection" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">NFT Collection</Link>
              <Link to="/impact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Impact</Link>
              <Link to="/community" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Community</Link>
              <Link to="/qr-scanner" className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium">Claim NFT</Link>
              
              {account ? (
                <button 
                  onClick={() => setIsWalletModalOpen(true)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all duration-200 border border-emerald-500/20"
                >
                  <CreditCard className="w-4 h-4" />
                  <div className="flex flex-col items-start">
                    <span className="font-mono text-xs">
                      {account.substring(0, 6)}...{account.substring(account.length - 4)}
                    </span>
                    {balance && chainId && (
                      <span className="text-xs text-emerald-300">
                        {parseFloat(balance).toFixed(3)} ETH • {getNetworkName(chainId)}
                      </span>
                    )}
                  </div>
                </button>
              ) : (
                <button 
                  onClick={() => setIsWalletModalOpen(true)}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-emerald-500/20"
                >
                  Connect Wallet
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              {account && (
              <button 
                onClick={() => setIsWalletModalOpen(true)}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all duration-200 border border-emerald-500/20"
                >
                  <CreditCard className="w-4 h-4" />
                  <span className="font-mono text-xs">
                    {account.substring(0, 4)}...{account.substring(account.length - 4)}
                  </span>
                </button>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800/95 backdrop-blur-sm`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              to="/events"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/activities"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Activities
            </Link>
            <Link
              to="/nft-collection"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              NFT Collection
            </Link>
            <Link
              to="/impact"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Impact
            </Link>
            <Link
              to="/community"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              to="/qr-scanner"
              className="block px-4 py-3 rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Claim NFT
            </Link>
            {!account && (
              <button
                onClick={() => {
                  setIsWalletModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-emerald-500/20"
              >
                Connect Wallet
              </button>
            )}
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