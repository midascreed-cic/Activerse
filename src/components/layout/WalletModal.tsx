import React from 'react';
import { useWeb3 } from '../../contexts/Web3Context';
import { X } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const { connectWallet, error, isMetaMaskInstalled } = useWeb3();

  if (!isOpen) return null;

  const handleConnect = async () => {
    await connectWallet();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 text-center">
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
          <div className="px-6 pt-5 pb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Connect Wallet</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {!isMetaMaskInstalled ? (
              <div className="text-center p-4">
                <p className="text-gray-300 mb-4">MetaMask is not installed</p>
                <a
                  href="https://metamask.io/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200"
                >
                  Install MetaMask
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={handleConnect}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200"
                >
                  <img src="/images/metamask.svg" alt="MetaMask" className="w-6 h-6" />
                  <span>Connect with MetaMask</span>
                </button>
                
                <p className="text-sm text-gray-400 text-center px-6">
                  By connecting your wallet, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 