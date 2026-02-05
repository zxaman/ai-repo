import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ResumeAnalysisComponent } from './features/resume-analysis/resume-analysis.component';
import { ResultPageComponent } from './features/result/result-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'AI Resume Analyzer - Home'
  },
  {
    path: 'analyze',
    component: ResumeAnalysisComponent,
    title: 'Resume Analysis - AI Resume Analyzer'
  },
  {
    path: 'results',
    component: ResultPageComponent,
    title: 'Analysis Results - AI Resume Analyzer'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
