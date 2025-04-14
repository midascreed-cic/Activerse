import React, { useState, useEffect } from 'react';
import { useWeb3 } from '../../contexts/Web3Context';

interface NFT {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  sdg: string;
  organization: string;
  date: string;
  owner: string;
}

interface Transaction {
  id: string;
  type: 'mint' | 'transfer';
  nftId: string;
  from: string;
  to: string;
  date: string;
}

export function NFTCollection() {
  const { account } = useWeb3();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, you would fetch NFTs from the smart contract
    // For now, we'll use mock data
    const mockNfts: NFT[] = [
      {
        id: '1',
        name: 'Blood Donation Hero',
        description: 'Awarded for donating blood to save lives',
        imageUrl: '/images/blood donation.jpg',
        sdg: 'SDG 3: Good Health and Well-being',
        organization: 'Red Cross',
        date: '2024-03-15',
        owner: '0x1234...5678'
      },
      {
        id: '2',
        name: 'Environmental Champion',
        description: 'Recognized for leading community clean-up initiatives',
        imageUrl: '/images/Enviromental Champion.png',
        sdg: 'SDG 13: Climate Action',
        organization: 'Green Earth',
        date: '2024-03-14',
        owner: '0x2345...6789'
      },
      {
        id: '3',
        name: 'Education Advocate',
        description: 'Awarded for teaching underprivileged children',
        imageUrl: '/images/Education Advocate NFT.jpg',
        sdg: 'SDG 4: Quality Education',
        organization: 'Teach For All',
        date: '2024-03-13',
        owner: '0x3456...7890'
      },
      {
        id: '4',
        name: 'Clean Water Hero',
        description: 'Recognized for water conservation efforts',
        imageUrl: '/images/Clean water Hero NFT.jpeg',
        sdg: 'SDG 6: Clean Water and Sanitation',
        organization: 'WaterAid',
        date: '2024-03-12',
        owner: '0x4567...8901'
      }
    ];

    const mockTransactions: Transaction[] = [
      {
        id: '1',
        type: 'mint',
        nftId: '1',
        from: '0x0000000000000000000000000000000000000000',
        to: '0x1234...5678',
        date: '2025-03-15'
      },
      {
        id: '2',
        type: 'transfer',
        nftId: '1',
        from: '0x1234...5678',
        to: '0x2345...6789',
        date: '2025-03-15'
      },
      {
        id: '3',
        type: 'mint',
        nftId: '2',
        from: '0x0000000000000000000000000000000000000000',
        to: '0x2345...6789',
        date: '2025-04-01'
      },
      {
        id: '4',
        type: 'mint',
        nftId: '3',
        from: '0x0000000000000000000000000000000000000000',
        to: '0x3456...7890',
        date: '2025-03-17'
      },
      {
        id: '5',
        type: 'transfer',
        nftId: '3',
        from: '0x3456...7890',
        to: '0x4567...8901',
        date: '2025-03-13'
      },
      {
        id: '6',
        type: 'mint',
        nftId: '4',
        from: '0x0000000000000000000000000000000000000000',
        to: '0x4567...8901',
        date: '2025-03-05'
      },
      {
        id: '7',
        type: 'transfer',
        nftId: '2',
        from: '0x2345...6789',
        to: '0x5678...9012',
        date: '2025-02-17'
      },
      {
        id: '8',
        type: 'transfer',
        nftId: '4',
        from: '0x4567...8901',
        to: '0x6789...0123',
        date: '2025-02-07'
      }
    ];

    setNfts(mockNfts);
    setTransactions(mockTransactions);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center">
          <p className="text-gray-600">Loading NFT collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">NFT Collection</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={nft.imageUrl} alt={nft.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{nft.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{nft.description}</p>
              <p className="text-emerald-600 text-sm font-medium">{nft.sdg}</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Organization: {nft.organization}</p>
                <p>Date: {nft.date}</p>
                <p>Owner: {nft.owner}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Transaction History</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NFT ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    tx.type === 'mint' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {tx.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.nftId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.from}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.to}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 