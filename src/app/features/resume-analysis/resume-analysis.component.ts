import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RoleSelectorComponent } from './components/role-selector.component';
import { JobDescriptionComponent } from './components/job-description.component';
import { ResumeUploadComponent } from './components/resume-upload.component';
import { AnalyzeButtonComponent } from './components/analyze-button.component';

@Component({
  selector: 'app-resume-analysis',
  standalone: true,
  imports: [
    CommonModule,
    RoleSelectorComponent,
    JobDescriptionComponent,
    ResumeUploadComponent,
    AnalyzeButtonComponent
  ],
  template: `
    <div class="analysis-container">
      <div class="page-header">
        <h1 class="page-title">Resume Analysis</h1>
        <p class="page-subtitle">
          Upload your resume and let our AI-powered system evaluate it against your target job role
        </p>
      </div>

      <div class="analysis-form">
        <div class="form-card">
          <div class="card-header">
            <h2 class="card-title">
              <span class="step-badge">Step 1</span>
              Job Information
            </h2>
          </div>
          <div class="card-content">
            <app-role-selector></app-role-selector>
            <app-job-description></app-job-description>
          </div>
        </div>

        <div class="form-card">
          <div class="card-header">
            <h2 class="card-title">
              <span class="step-badge">Step 2</span>
              Resume Upload
            </h2>
          </div>
          <div class="card-content">
            <app-resume-upload (fileSelected)="onFileSelected($event)"></app-resume-upload>
          </div>
        </div>

        <div class="form-card">
          <div class="card-header">
            <h2 class="card-title">
              <span class="step-badge">Step 3</span>
              Analyze
            </h2>
          </div>
          <div class="card-content">
            <app-analyze-button 
              [canAnalyze]="canAnalyze()"
              [isAnalyzing]="isAnalyzing"
              (analyze)="onAnalyze()"
            ></app-analyze-button>
          </div>
        </div>
      </div>

      <div class="info-section">
        <div class="info-card">
          <h3>📊 What We Analyze</h3>
          <ul>
            <li><strong>Skill Matching:</strong> Compare your skills with job requirements</li>
            <li><strong>Semantic Similarity:</strong> Understand context beyond keywords</li>
            <li><strong>Experience Level:</strong> Evaluate years and relevance of experience</li>
            <li><strong>Project Relevance:</strong> Assess how your projects align with the role</li>
          </ul>
        </div>

        <div class="info-card">
          <h3>🔒 Privacy & Security</h3>
          <ul>
            <li>Your resume is processed securely</li>
            <li>No data is stored permanently</li>
            <li>Analysis happens in real-time</li>
            <li>Results are private to your session</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .analysis-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      min-height: calc(100vh - 120px);
    }

    .page-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: #1a202c;
      margin: 0 0 1rem 0;
    }

    .page-subtitle {
      font-size: 1.1rem;
      color: #718096;
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .analysis-form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .form-card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      overflow: hidden;
      transition: all 0.3s;
    }

    .form-card:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    .card-header {
      background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
      padding: 1.5rem;
      border-bottom: 2px solid #e2e8f0;
    }

    .card-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      color: #2d3748;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .step-badge {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 0.375rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
    }

    .card-content {
      padding: 2rem;
    }

    .info-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .info-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      border-left: 4px solid #667eea;
    }

    .info-card h3 {
      margin: 0 0 1rem 0;
      font-size: 1.25rem;
      color: #2d3748;
    }

    .info-card ul {
      margin: 0;
      padding-left: 1.25rem;
      color: #4a5568;
      line-height: 1.8;
    }

    .info-card li {
      margin: 0.5rem 0;
    }

    .info-card strong {
      color: #2d3748;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .analysis-container {
        padding: 1.5rem 1rem;
      }

      .page-title {
        font-size: 2rem;
      }

      .page-subtitle {
        font-size: 1rem;
      }

      .card-content {
        padding: 1.5rem;
      }

      .info-section {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ResumeAnalysisComponent {
  selectedFile: File | null = null;
  isAnalyzing: boolean = false;

  constructor(private router: Router) {}

  onFileSelected(file: File | null): void {
    this.selectedFile = file;
  }

  canAnalyze(): boolean {
    // In Phase 1, we just check if file is uploaded
    // Role selection will be validated when integrated
    return this.selectedFile !== null;
  }

  onAnalyze(): void {
    if (!this.canAnalyze()) {
      return;
    }

    // Phase 1: Just navigate to results page
    // In later phases, this will trigger API call
    this.isAnalyzing = true;

    // Simulate analysis time
    setTimeout(() => {
      this.isAnalyzing = false;
      this.router.navigate(['/results']);
    }, 1500);
  }
}
