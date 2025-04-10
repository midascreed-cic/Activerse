import React from 'react';
import { X, Wallet, CreditCard, AlertCircle } from 'lucide-react';
import { useWeb3 } from '../contexts/Web3Context';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const { connect, disconnect, account, isConnecting, isMetaMaskInstalled } = useWeb3();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity" 
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="inline-block transform overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 text-left align-bottom shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-2xl font-bold leading-6 text-white mb-6">
                {account ? 'Wallet Connected' : 'Connect Wallet'}
              </h3>

              {!isMetaMaskInstalled && (
                <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-emerald-400" />
                    <p className="text-sm text-emerald-300">
                      MetaMask is not installed. Please install it to continue.
                    </p>
                  </div>
                  <a
                    href="https://metamask.io/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-emerald-500/20"
                  >
                    Install MetaMask
                  </a>
                </div>
              )}

              {account ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-emerald-400" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-emerald-300">Connected Account</p>
                        <p className="text-xs font-mono text-gray-400 mt-1">
                          {account}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={disconnect}
                    className="w-full px-4 py-3 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-200 border border-red-500/20"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <button
                  onClick={connect}
                  disabled={isConnecting || !isMetaMaskInstalled}
                  className={`w-full px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 ${
                    isConnecting || !isMetaMaskInstalled
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/20'
                  }`}
                >
                  {isConnecting ? 'Connecting...' : 'Connect with MetaMask'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}