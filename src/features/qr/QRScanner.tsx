import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useWeb3 } from '../../contexts/Web3Context';
import { ethers } from 'ethers';

interface QRScannerProps {
  onScanComplete?: (result: string) => void;
}

export const QRScanner: React.FC<QRScannerProps> = ({ onScanComplete }) => {
  const [error, setError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const { signer, account } = useWeb3();

  const handleScan = async (result: string | null) => {
    if (!result) return;
    
    try {
      // Validate the QR code data
      const qrData = JSON.parse(result);
      
      if (!qrData.eventId || !qrData.contractAddress) {
        throw new Error('Invalid QR code data');
      }

      // Stop scanning after successful scan
      setIsScanning(false);
      
      if (onScanComplete) {
        onScanComplete(result);
      }
    } catch (err) {
      setError('Invalid QR code. Please scan a valid ActiVerse event QR code.');
      console.error('Scan error:', err);
    }
  };

  const handleError = (error: Error) => {
    console.error('QR Scanner error:', error);
    setError('Failed to access camera. Please ensure camera permissions are granted.');
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Scan Event QR Code</h2>
      
      {!account && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p>Please connect your wallet to claim NFTs</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p>{error}</p>
        </div>
      )}

      <div className="w-full max-w-md">
        {isScanning ? (
          <QrReader
            constraints={{ facingMode: 'environment' }}
            onResult={(result) => {
              if (result) {
                handleScan(result.getText());
              }
            }}
            videoId="qr-video"
            className="w-full"
          />
        ) : (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
            <p>QR Code scanned successfully!</p>
          </div>
        )}
      </div>

      <button
        onClick={() => setIsScanning(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={isScanning}
      >
        Scan Again
      </button>
    </div>
  );
}; 