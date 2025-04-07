import React, { useState } from 'react';
import { Wallet, X } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async (walletType: string) => {
    setIsConnecting(true);
    setError(null);
    
    try {
      // Simulated connection delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would implement actual wallet connection logic
      console.log(`Connecting to ${walletType}...`);
      
      onClose();
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect Wallet</h2>
          <p className="text-gray-600">
            Choose your preferred wallet to connect to ActiVerse
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={() => handleConnect('metamask')}
            disabled={isConnecting}
            className="w-full flex items-center justify-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Wallet className="w-6 h-6 text-emerald-600" />
            <span className="font-semibold text-gray-900">MetaMask</span>
          </button>

          <button
            onClick={() => handleConnect('walletconnect')}
            disabled={isConnecting}
            className="w-full flex items-center justify-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Wallet className="w-6 h-6 text-emerald-600" />
            <span className="font-semibold text-gray-900">WalletConnect</span>
          </button>

          <button
            onClick={() => handleConnect('coinbase')}
            disabled={isConnecting}
            className="w-full flex items-center justify-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Wallet className="w-6 h-6 text-emerald-600" />
            <span className="font-semibold text-gray-900">Coinbase Wallet</span>
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            By connecting your wallet, you agree to our{' '}
            <a href="#" className="text-emerald-600 hover:text-emerald-700">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-emerald-600 hover:text-emerald-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}