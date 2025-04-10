import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

interface Organization {
  id: string;
  name: string;
  description: string;
  sdgGoals: number[];
  activities: string[];
}

interface Activity {
  id: string;
  name: string;
  description: string;
  sdgGoal: number;
  activityType: string;
  location: string;
  date: string;
  points: number;
  organizationId: string;
  nftTemplate: {
    name: string;
    description: string;
    image: string;
  };
}

class ActivityVerificationService {
  private activities: Activity[] = [];
  private organizations: Organization[] = [];
  private verifiedActivities: Set<string> = new Set();

  constructor() {
    // Load verified activities from localStorage
    const savedVerified = localStorage.getItem('verifiedActivities');
    if (savedVerified) {
      this.verifiedActivities = new Set(JSON.parse(savedVerified));
    }

    // Initialize organizations
    this.organizations = [
      {
        id: uuidv4(),
        name: 'Red Cross Blood Services',
        description: 'Leading blood donation organization',
        sdgGoals: [3], // Good Health and Well-being
        activities: ['blood_donation']
      },
      {
        id: uuidv4(),
        name: 'Green Earth Foundation',
        description: 'Environmental conservation organization',
        sdgGoals: [13, 15], // Climate Action, Life on Land
        activities: ['tree_planting', 'beach_cleanup']
      },
      {
        id: uuidv4(),
        name: 'Education for All',
        description: 'Promoting quality education',
        sdgGoals: [4], // Quality Education
        activities: ['teaching', 'mentoring']
      },
      {
        id: uuidv4(),
        name: 'Mental Health Initiative',
        description: 'Supporting mental health awareness',
        sdgGoals: [3], // Good Health and Well-being
        activities: ['mental_health_workshop']
      },
      {
        id: uuidv4(),
        name: 'Food Security Network',
        description: 'Combating hunger and promoting sustainable agriculture',
        sdgGoals: [2], // Zero Hunger
        activities: ['food_donation', 'community_garden']
      }
    ];

    // Initialize activities
    this.activities = [
      {
        id: uuidv4(),
        name: 'Blood Donation Drive',
        description: 'Donate blood to save lives',
        sdgGoal: 3,
        activityType: 'Healthcare',
        location: 'City Hospital',
        date: '2024-04-25',
        points: 150,
        organizationId: this.organizations[0].id,
        nftTemplate: {
          name: 'Lifesaver Badge',
          description: 'Awarded for participating in blood donation',
          image: '/nft-templates/blood-donor.png'
        }
      },
      {
        id: uuidv4(),
        name: 'Community Tree Planting',
        description: 'Plant trees in your local park',
        sdgGoal: 13,
        activityType: 'Environmental',
        location: 'Central Park',
        date: '2024-04-20',
        points: 100,
        organizationId: this.organizations[1].id,
        nftTemplate: {
          name: 'Tree Planter Badge',
          description: 'Awarded for participating in community tree planting',
          image: '/nft-templates/tree-planter.png'
        }
      },
      {
        id: uuidv4(),
        name: 'Beach Cleanup Initiative',
        description: 'Help clean up local beaches',
        sdgGoal: 14,
        activityType: 'Environmental',
        location: 'Ocean Beach',
        date: '2024-05-01',
        points: 120,
        organizationId: this.organizations[1].id,
        nftTemplate: {
          name: 'Ocean Guardian Badge',
          description: 'Awarded for participating in beach cleanup',
          image: '/nft-templates/beach-cleanup.png'
        }
      },
      {
        id: uuidv4(),
        name: 'Youth Mentoring Program',
        description: 'Mentor underprivileged youth',
        sdgGoal: 4,
        activityType: 'Education',
        location: 'Community Center',
        date: '2024-04-22',
        points: 200,
        organizationId: this.organizations[2].id,
        nftTemplate: {
          name: 'Mentor Badge',
          description: 'Awarded for mentoring youth',
          image: '/nft-templates/mentor.png'
        }
      },
      {
        id: uuidv4(),
        name: 'Mental Health Workshop',
        description: 'Participate in mental health awareness workshop',
        sdgGoal: 3,
        activityType: 'Healthcare',
        location: 'Mental Health Center',
        date: '2024-04-28',
        points: 180,
        organizationId: this.organizations[3].id,
        nftTemplate: {
          name: 'Mental Health Advocate Badge',
          description: 'Awarded for participating in mental health workshop',
          image: '/nft-templates/mental-health.png'
        }
      },
      {
        id: uuidv4(),
        name: 'Community Food Drive',
        description: 'Donate food to local food bank',
        sdgGoal: 2,
        activityType: 'Social',
        location: 'Community Center',
        date: '2024-04-30',
        points: 150,
        organizationId: this.organizations[4].id,
        nftTemplate: {
          name: 'Food Security Champion Badge',
          description: 'Awarded for participating in food drive',
          image: '/nft-templates/food-drive.png'
        }
      }
    ];
  }

  async generateQRCode(activityId: string): Promise<string> {
    const activity = this.activities.find(a => a.id === activityId);
    if (!activity) throw new Error('Activity not found');

    const organization = this.organizations.find(o => o.id === activity.organizationId);
    if (!organization) throw new Error('Organization not found');

    const verificationData = {
      type: 'activity_verification',
      activityId,
      organizationId: organization.id,
      timestamp: Date.now()
    };

    return await QRCode.toDataURL(JSON.stringify(verificationData));
  }

  async verifyActivity(activityId: string, organizationId: string): Promise<Activity> {
    const activity = this.activities.find(a => a.id === activityId);
    if (!activity) throw new Error('Activity not found');

    if (activity.organizationId !== organizationId) {
      throw new Error('Invalid organization for this activity');
    }

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

  getOrganizations(): Organization[] {
    return this.organizations;
  }

  getOrganizationById(id: string): Organization | undefined {
    return this.organizations.find(o => o.id === id);
  }

  isActivityVerified(activityId: string): boolean {
    return this.verifiedActivities.has(activityId);
  }
}

export const activityVerification = new ActivityVerificationService(); 