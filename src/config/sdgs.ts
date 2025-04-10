export interface SDG {
  id: string;
  name: string;
  color: string;
  description: string;
  events: string[];
}

export const SDG_CONFIG: Record<string, SDG> = {
  'SDG3': {
    id: 'SDG3',
    name: 'Good Health and Well-being',
    color: '#4CAF50',
    description: 'Ensure healthy lives and promote well-being for all at all ages',
    events: ['blood_donation', 'mental_health', 'health_awareness']
  },
  'SDG4': {
    id: 'SDG4',
    name: 'Quality Education',
    color: '#2196F3',
    description: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
    events: ['skills_training', 'financial_literacy', 'educational_workshop']
  },
  'SDG5': {
    id: 'SDG5',
    name: 'Gender Equality',
    color: '#FF4081',
    description: 'Achieve gender equality and empower all women and girls',
    events: ['empowerment_workshop', 'gender_equality_seminar']
  },
  'SDG13': {
    id: 'SDG13',
    name: 'Climate Action',
    color: '#00BCD4',
    description: 'Take urgent action to combat climate change and its impacts',
    events: ['tree_planting', 'climate_awareness', 'sustainability_workshop']
  }
};

export const getSDGByEvent = (eventType: string): SDG | undefined => {
  return Object.values(SDG_CONFIG).find(sdg => 
    sdg.events.includes(eventType)
  );
};

export const getSDGColor = (sdgId: string): string => {
  return SDG_CONFIG[sdgId]?.color || '#000000';
}; 