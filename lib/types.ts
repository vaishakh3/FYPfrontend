export interface Emergency {
  id: string;
  type: string;
  location: string;
  timestamp: string;
  status: 'critical' | 'ongoing' | 'resolved';
  details: {
    title: string;
    timeOfCall: string;
    location: string;
    summary: string;
    emotions: {
      primary: { type: string; value: number };
      secondary: { type: string; value: number };
    };
  };
  transcript: Array<{
    role: 'operator' | 'caller';
    text: string;
  }>;
}