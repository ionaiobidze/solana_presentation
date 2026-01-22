export enum VisualType {
  TITLE = 'TITLE',
  ARCHITECTURE = 'ARCHITECTURE',
  CONSENSUS = 'CONSENSUS',
  TOKENOMICS = 'TOKENOMICS',
  TRILEMMA = 'TRILEMMA',
  THANK_YOU = 'THANK_YOU',
  LIST = 'LIST',
  SPLIT_IMAGE = 'SPLIT_IMAGE',
  GRID = 'GRID'
}

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: string[]; // Bullet points for the slide
  visualType: VisualType;
  visualData?: any; // Flexible data for specific visualizers
  speakerNotes: string; // Context for the AI
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}