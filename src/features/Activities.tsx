import React, { useState } from 'react';
import { useWeb3 } from '../contexts/Web3Context';

interface Activity {
  id: string;
  title: string;
  description: string;
  reward: string;
  deadline: string;
  sdg: string;
  organization: string;
  status: 'open' | 'completed';
  viewMoreLink?: string;
}

export function Activities() {
  const { account } = useWeb3();
  const [activities] = useState<Activity[]>([
    {
      id: '1',
      title: 'Community Clean-up Challenge',
      description: 'Clean up your local park and document the process. Submit before and after photos.',
      reward: 'Environmental Steward NFT',
      deadline: '2024-04-30',
      sdg: 'SDG 11: Sustainable Cities and Communities',
      organization: 'Green Earth',
      status: 'open',
      viewMoreLink: 'https://www.greenearthpressmalawi.com/'
    },
    {
      id: '2',
      title: 'Blood Donation Campaign',
      description: 'Donate blood and share your experience to encourage others.',
      reward: 'Life Saver NFT',
      deadline: '2024-05-15',
      sdg: 'SDG 3: Good Health and Well-being',
      organization: 'Red Cross',
      status: 'open',
      viewMoreLink: 'https://www.redcross.mw/'
    },
    {
      id: '3',
      title: 'Education Workshop',
      description: 'Conduct a workshop for underprivileged children in your community.',
      reward: 'Education Champion NFT',
      deadline: '2025-07-29',
      sdg: 'SDG 4: Quality Education',
      organization: 'Teach For All',
      status: 'open',
      viewMoreLink: 'https://web.facebook.com/people/Teach-For-Malawi/100085267377142/'
    }
  ]);

  const handleClaimReward = (activityId: string) => {
    if (!account) {
      alert('Please connect your wallet to claim rewards');
      return;
    }
    // In a real implementation, this would trigger the NFT minting process
    alert('Reward claimed! Your NFT will be minted to your wallet.');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Available Activities</h2>
      
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p><span className="font-medium">Reward:</span> {activity.reward}</p>
                  <p><span className="font-medium">Deadline:</span> {activity.deadline}</p>
                  <p><span className="font-medium">SDG:</span> {activity.sdg}</p>
                  <p><span className="font-medium">Organization:</span> {activity.organization}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                  activity.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {activity.status}
                </span>
                {activity.viewMoreLink && (
                  <a
                    href={activity.viewMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-500"
                  >
                    View More
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 