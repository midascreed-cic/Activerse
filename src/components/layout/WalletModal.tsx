import React from 'react';
import { useWeb3 } from '../../contexts/Web3Context';
import { X, CreditCard } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const { connectWallet, error, isMetaMaskInstalled, account, disconnect } = useWeb3();

  if (!isOpen) return null;

  const handleConnect = async () => {
    await connectWallet();
    onClose();
  };

  const handleDisconnect = async () => {
    await disconnect();
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
              <h3 className="text-xl font-semibold text-white">
                {account ? 'Wallet Connected' : 'Connect Wallet'}
              </h3>
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
            ) : account ? (
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
                  onClick={handleDisconnect}
                  className="w-full px-4 py-3 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-200 border border-red-500/20"
                >
                  Disconnect Wallet
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={handleConnect}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200"
                >
                  <svg width="24" height="24" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <path d="M32.9582 1L19.8241 10.7183L22.2665 4.99099L32.9582 1Z" fill="#E17726"/>
                    <path d="M2.65601 1L15.6732 10.809L13.3477 4.99098L2.65601 1Z" fill="#E27625"/>
                    <path d="M28.2171 23.5163L24.7031 28.8967L32.2491 30.9452L34.3821 23.6289L28.2171 23.5163Z" fill="#E27625"/>
                    <path d="M1.24414 23.6289L3.36486 30.9452L10.8996 28.8967L7.39688 23.5163L1.24414 23.6289Z" fill="#E27625"/>
                    <path d="M10.4704 14.5149L8.39844 17.6507L15.8661 17.9884L15.6082 10.0186L10.4704 14.5149Z" fill="#E27625"/>
                    <path d="M25.1375 14.5151L19.9021 9.92798L19.7295 17.9886L27.1972 17.6509L25.1375 14.5151Z" fill="#E27625"/>
                    <path d="M10.8994 28.8967L15.4077 26.7357L11.4932 23.6851L10.8994 28.8967Z" fill="#E27625"/>
                    <path d="M20.1953 26.7357L24.7036 28.8967L24.1098 23.6851L20.1953 26.7357Z" fill="#E27625"/>
                    <path d="M24.7036 28.8967L20.1953 26.7357L20.5619 29.6738L20.5274 30.8328L24.7036 28.8967Z" fill="#D5BFB2"/>
                    <path d="M10.8994 28.8967L15.0756 30.8328L15.0524 29.6738L15.4077 26.7357L10.8994 28.8967Z" fill="#D5BFB2"/>
                    <path d="M15.1565 21.7842L11.3984 20.6815L14.0511 19.4788L15.1565 21.7842Z" fill="#233447"/>
                    <path d="M20.4512 21.7842L21.5567 19.4788L24.2207 20.6815L20.4512 21.7842Z" fill="#233447"/>
                    <path d="M10.8996 28.8967L11.5279 23.5163L7.39688 23.6289L10.8996 28.8967Z" fill="#CC6228"/>
                    <path d="M24.0879 23.5163L24.7049 28.8967L28.2189 23.6289L24.0879 23.5163Z" fill="#CC6228"/>
                    <path d="M27.1973 17.6509L19.7295 17.9886L20.4541 21.7842L21.5595 19.4788L24.2235 20.6815L27.1973 17.6509Z" fill="#CC6228"/>
                    <path d="M11.3984 20.6815L14.0511 19.4788L15.1565 21.7842L15.8811 17.9886L8.39844 17.6509L11.3984 20.6815Z" fill="#CC6228"/>
                    <path d="M8.39844 17.6509L11.4932 23.6851L11.3984 20.6815L8.39844 17.6509Z" fill="#E27525"/>
                    <path d="M24.2235 20.6815L24.1099 23.6851L27.1972 17.6509L24.2235 20.6815Z" fill="#E27525"/>
                    <path d="M15.8811 17.9886L15.1565 21.7842L16.0723 26.2805L16.2677 20.3438L15.8811 17.9886Z" fill="#E27525"/>
                    <path d="M19.7295 17.9886L19.3542 20.3325L19.5383 26.2805L20.4541 21.7842L19.7295 17.9886Z" fill="#E27525"/>
                    <path d="M20.4541 21.7842L19.5383 26.2805L20.1953 26.7357L24.1099 23.6851L24.2235 20.6815L20.4541 21.7842Z" fill="#F5841F"/>
                    <path d="M11.3984 20.6815L11.4932 23.6851L15.4077 26.7357L16.0723 26.2805L15.1565 21.7842L11.3984 20.6815Z" fill="#F5841F"/>
                    <path d="M20.5274 30.8328L20.5619 29.6738L20.2188 29.3812H15.3891L15.0574 29.6738L15.0806 30.8328L10.8994 28.8967L12.3843 30.1219L15.3317 32.1017H20.2647L23.2235 30.1219L24.7084 28.8967L20.5274 30.8328Z" fill="#C0AC9D"/>
                    <path d="M20.1953 26.7357L19.5383 26.2805H16.0723L15.4077 26.7357L15.0524 29.6738L15.3841 29.3812H20.2188L20.5619 29.6738L20.1953 26.7357Z" fill="#161616"/>
                    <path d="M33.5866 11.3532L34.7153 5.98873L32.9582 1L20.1953 10.3806L25.1375 14.5151L32.0997 16.5511L33.6306 14.7776L32.9468 14.2774L33.9829 13.2658L33.1545 12.6218L34.1906 11.7765L33.5866 11.3532Z" fill="#763E1A"/>
                    <path d="M1 5.98873L2.14005 11.3532L1.51337 11.7765L2.56085 12.6218L1.73244 13.2658L2.76855 14.2774L2.08476 14.7776L3.61559 16.5511L10.5778 14.5151L15.52 10.3806L2.75719 1L1 5.98873Z" fill="#763E1A"/>
                    <path d="M32.0997 16.5511L25.1375 14.5151L27.1972 17.6509L24.1099 23.6851L28.2189 23.6289H34.3831L32.0997 16.5511Z" fill="#F5841F"/>
                    <path d="M10.4704 14.5151L3.50818 16.5511L1.24414 23.6289H7.39688L11.4932 23.6851L8.39844 17.6509L10.4704 14.5151Z" fill="#F5841F"/>
                    <path d="M19.7295 17.9886L20.1953 10.3806L22.2665 4.99098H13.3477L15.4189 10.3806L15.8847 17.9886L16.0609 20.3551L16.0723 26.2805H19.5383L19.5497 20.3551L19.7295 17.9886Z" fill="#F5841F"/>
                  </svg>
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