export enum Tier {
  One = "Tier 1 (Critical)",
  Two = "Tier 2 (Standard)",
  Three = "Tier 3 (Low-Risk)",
}

export interface AssessmentQuestion {
  id: number;
  section: 'A' | 'B';
  text: string;
}

export interface TierDetails {
  title: string;
  description: string;
  headers: string[];
  requirements: string[][];
}
