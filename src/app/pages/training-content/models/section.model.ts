export interface Lecture {
  id: number;
  titleAr: string;
  titleEn: string;
  type: 'text' | 'video' | 'pdf' | 'audio' | 'image' | 'test';
  content?: string;
  fileUrl?: string;
  videoType?: 'file' | 'link'; 
  questions?: Question[];
  totalScore?: number; 
  passingScore?: number;
  duration?: number;
  testType?: 'electronic' | 'attendance';
  location?: string; 
  testDate?: string; 
  testTime?: string; 
  order: number; 
  hasDeadline?:any
}

export interface Question {
  id: number;
  type: 'multiple' | 'trueFalse';
  text: string;
  options?: string[];
  correctAnswer: string | boolean;
  score: number;
}

export interface Section {
  id: number;
  titleAr: string;
  titleEn: string;
  lectures: Lecture[];
  order?: number; 
}