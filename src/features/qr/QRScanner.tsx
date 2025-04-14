import React, { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useWeb3 } from '../../contexts/Web3Context';
import { X, RefreshCw, Camera } from 'lucide-react';

interface QRScannerProps {
  onScanComplete?: (result: string) => void;
}

export const QRScanner: React.FC<QRScannerProps> = ({ onScanComplete }) => {
  const [error, setError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const { signer, account } = useWeb3();
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, []);

  const handleScan = async (decodedText: string) => {
    try {
      // Validate the QR code data
      const qrData = JSON.parse(decodedText);
      
      if (!qrData.eventId || !qrData.contractAddress) {
        throw new Error('Invalid QR code data');
      }

      // Stop scanning after successful scan
      setIsScanning(false);
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
      
      if (onScanComplete) {
        onScanComplete(decodedText);
      }
    } catch (err) {
      setError('Invalid QR code. Please scan a valid ActiVerse event QR code.');
      console.error('Scan error:', err);
    }
  };

  const handleError = (error: string) => {
    console.error('QR Scanner error:', error);
    setError('Failed to access camera. Please ensure camera permissions are granted.');
    setIsScanning(false);
  };

  const handleCancel = () => {
    if (scannerRef.current) {
      scannerRef.current.clear();
    }
    setIsScanning(false);
    setError(null);
  };

  const handleStartScanning = async () => {
    try {
      setIsScanning(true);
      setError(null);

      // Initialize the scanner
      scannerRef.current = new Html5QrcodeScanner(
        "qr-reader",
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1,
          showTorchButtonIfSupported: true,
        },
        false
      );

      scannerRef.current.render(handleScan, handleError);
    } catch (err) {
      setError('Camera permission denied. Please allow camera access to scan QR codes.');
      console.error('Camera permission error:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {!account && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded-lg">
          <p>Please connect your wallet to claim NFTs</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-lg">
          <p>{error}</p>
        </div>
      )}

      <div className="w-full max-w-md relative">
        {!isScanning ? (
          <div className="bg-white rounded-lg p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Camera className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Scan</h3>
              <p className="text-gray-600 mb-6">Click the button below to start scanning QR codes</p>
            </div>
            <button
              onClick={handleStartScanning}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg"
            >
              <Camera className="w-5 h-5 mr-2" />
              Start Camera
            </button>
          </div>
        ) : (
          <div className="relative">
            <div id="qr-reader" className="w-full rounded-lg overflow-hidden" />
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200"
              aria-label="Cancel scanning"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        )}
      </div>

      {isScanning && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">Scanning for QR code...</p>
          <p className="text-xs text-gray-400">Position the QR code within the frame</p>
        </div>
      )}
    </div>
  );
}; 