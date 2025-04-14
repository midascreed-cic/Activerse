import React, { useState } from 'react';
import { useWeb3 } from '../contexts/Web3Context';
import { QRScanner } from '../features/qr/QRScanner';
import { motion } from 'framer-motion';
import { Wallet, QrCode, AlertCircle } from 'lucide-react';

export function QRScannerPage() {
  const { account, connectWallet, error, isConnecting } = useWeb3();
  const [isConnectClicked, setIsConnectClicked] = useState(false);

  const handleConnect = async () => {
    setIsConnectClicked(true);
    try {
      await connectWallet();
    } catch (err) {
      console.error('Connection error:', err);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-700 py-12 px-4">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/sdgq.jpeg')] bg-cover bg-center opacity-20" />
      
      {/* Content */}
      <div className="relative max-w-lg mx-auto">
        {!account ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect Your Wallet</h2>
            <p className="text-gray-600 mb-8">
              Please connect your wallet to access the QR scanner and claim your impact NFTs.
            </p>

            {error && isConnectClicked && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              </div>
            )}

            <button
              onClick={handleConnect}
              disabled={isConnecting}
              className={`w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                isConnecting ? 'opacity-75 cursor-not-allowed' : 'hover:from-emerald-500 hover:to-emerald-400'
              }`}
            >
              <Wallet className="w-5 h-5" />
              <span>{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
            </button>

            {!error && isConnectClicked && (
              <p className="mt-4 text-sm text-gray-500">
                Please check your MetaMask extension to complete the connection.
              </p>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 text-center border-b border-gray-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <QrCode className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Scan QR Code</h2>
              <p className="text-gray-600">
                Point your camera at the event QR code to claim your impact NFT.
              </p>
            </div>
            <div className="p-4">
              <QRScanner />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 