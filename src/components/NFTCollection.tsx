import React, { useState, useEffect } from 'react';
import { mockBlockchain } from '../services/mockBlockchain';

export const NFTCollection: React.FC = () => {
  const [nfts, setNfts] = useState(mockBlockchain.getUserNFTs());
  const [transactions, setTransactions] = useState(mockBlockchain.getTransactionHistory());

  useEffect(() => {
    // Refresh NFTs and transactions every 5 seconds
    const interval = setInterval(() => {
      setNfts(mockBlockchain.getUserNFTs());
      setTransactions(mockBlockchain.getTransactionHistory());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Your Impact Collection</h2>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{nft.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{nft.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-600">SDG Goal {nft.sdgGoal}</span>
                <span className="text-gray-500">{nft.activityType}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4">Transaction History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Transaction Hash</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">From</th>
                <th className="text-left py-3 px-4">To</th>
                <th className="text-left py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono text-sm">
                    {tx.id.substring(0, 8)}...
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      tx.type === 'MINT' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-sm">
                    {tx.from.substring(0, 6)}...
                  </td>
                  <td className="py-3 px-4 font-mono text-sm">
                    {tx.to.substring(0, 6)}...
                  </td>
                  <td className="py-3 px-4 text-sm">
                    {new Date(tx.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}; 