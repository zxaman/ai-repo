export interface JobRole {
  id: string;
  name: string;
  description?: string;
}

export interface JobRoleData {
  roles: string[];
}

export interface ScoringWeights {
  skillMatch: number;
  semanticSimilarity: number;
  experienceAlignment: number;
  projectRelevance: number;
}

export interface ResumeAnalysisRequest {
  jobRole: string;
  jobDescription?: string;
  resumeFile: File;
}

export interface AnalysisResult {
  overallScore: number;
  breakdown: ScoreBreakdown;
  matchedSkills: string[];
  missingSkills: string[];
  feedback: string;
}

export interface ScoreBreakdown {
  skillMatch: number;
  semanticSimilarity: number;
  experienceAlignment: number;
  projectRelevance: number;
}
