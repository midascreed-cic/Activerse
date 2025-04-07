import React, { useState, useEffect } from 'react';
import { activityVerification } from '../services/activityVerification';
import { mockBlockchain } from '../services/mockBlockchain';

export const Activities: React.FC = () => {
  const [activities, setActivities] = useState(activityVerification.getActivities());
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState<string | null>(null);

  useEffect(() => {
    // Connect wallet on component mount
    const address = mockBlockchain.connectWallet();
    setWallet(address);
  }, []);

  const handleGenerateQR = async (activityId: string) => {
    try {
      setLoading(true);
      const qrCodeData = await activityVerification.generateQRCode(activityId);
      setQrCode(qrCodeData);
      setSelectedActivity(activityId);
    } catch (error) {
      console.error('Error generating QR code:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyActivity = async (activityId: string) => {
    try {
      setLoading(true);
      const activity = await activityVerification.verifyActivity(activityId);
      
      // Mint virtual NFT
      await mockBlockchain.mintVirtualNFT(
        activity.nftTemplate.name,
        activity.nftTemplate.description,
        activity.nftTemplate.image,
        activity.sdgGoal,
        activity.activityType
      );

      // Reset UI state
      setQrCode(null);
      setSelectedActivity(null);
      
      // Show success message
      alert('Activity verified and NFT minted successfully!');
    } catch (error) {
      console.error('Error verifying activity:', error);
      alert('Error: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Available Activities</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
            <p className="text-gray-600 mb-4">{activity.description}</p>
            
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                <span className="font-medium">Location:</span> {activity.location}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Date:</span> {activity.date}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Points:</span> {activity.points}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">SDG Goal:</span> {activity.sdgGoal}
              </p>
            </div>

            {activityVerification.isActivityVerified(activity.id) ? (
              <div className="text-green-600 font-medium">✓ Verified</div>
            ) : (
              <button
                onClick={() => handleGenerateQR(activity.id)}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 
                         disabled:bg-blue-300 transition-colors w-full"
              >
                Generate QR Code
              </button>
            )}
          </div>
        ))}
      </div>

      {/* QR Code Modal */}
      {qrCode && selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Scan QR Code</h3>
            <img src={qrCode} alt="QR Code" className="w-full mb-4" />
            <div className="flex gap-4">
              <button
                onClick={() => setQrCode(null)}
                className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-md 
                         hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => handleVerifyActivity(selectedActivity)}
                disabled={loading}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md 
                         hover:bg-green-700 disabled:bg-green-300 transition-colors"
              >
                Verify Activity
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 