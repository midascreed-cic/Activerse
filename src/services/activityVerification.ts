import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

interface Activity {
  id: string;
  name: string;
  description: string;
  sdgGoal: number;
  activityType: string;
  location: string;
  date: string;
  points: number;
  nftTemplate: {
    name: string;
    description: string;
    image: string;
  };
}

class ActivityVerificationService {
  private activities: Activity[] = [];
  private verifiedActivities: Set<string> = new Set();

  constructor() {
    // Load verified activities from localStorage
    const savedVerified = localStorage.getItem('verifiedActivities');
    if (savedVerified) {
      this.verifiedActivities = new Set(JSON.parse(savedVerified));
    }

    // Initialize with some sample activities
    this.activities = [
      {
        id: uuidv4(),
        name: 'Community Tree Planting',
        description: 'Plant trees in your local park',
        sdgGoal: 13, // Climate Action
        activityType: 'Environmental',
        location: 'Central Park',
        date: '2024-04-20',
        points: 100,
        nftTemplate: {
          name: 'Tree Planter Badge',
          description: 'Awarded for participating in community tree planting',
          image: '/nft-templates/tree-planter.png'
        }
      },
      {
        id: uuidv4(),
        name: 'Blood Donation Drive',
        description: 'Donate blood to save lives',
        sdgGoal: 3, // Good Health and Well-being
        activityType: 'Healthcare',
        location: 'City Hospital',
        date: '2024-04-25',
        points: 150,
        nftTemplate: {
          name: 'Lifesaver Badge',
          description: 'Awarded for participating in blood donation',
          image: '/nft-templates/blood-donor.png'
        }
      }
    ];
  }

  async generateQRCode(activityId: string): Promise<string> {
    const activity = this.activities.find(a => a.id === activityId);
    if (!activity) throw new Error('Activity not found');

    const verificationData = {
      type: 'activity_verification',
      activityId,
      timestamp: Date.now()
    };

    return await QRCode.toDataURL(JSON.stringify(verificationData));
  }

  async verifyActivity(activityId: string): Promise<Activity> {
    const activity = this.activities.find(a => a.id === activityId);
    if (!activity) throw new Error('Activity not found');

    if (this.verifiedActivities.has(activityId)) {
      throw new Error('Activity already verified');
    }

    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    this.verifiedActivities.add(activityId);
    localStorage.setItem('verifiedActivities', 
      JSON.stringify(Array.from(this.verifiedActivities)));

    return activity;
  }

  getActivities(): Activity[] {
    return this.activities;
  }

  isActivityVerified(activityId: string): boolean {
    return this.verifiedActivities.has(activityId);
  }
}

export const activityVerification = new ActivityVerificationService(); 