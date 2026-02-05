import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ScoreCardComponent } from './components/score-card.component';
import { SkillMatchComponent } from './components/skill-match.component';
import { FeedbackComponent } from './components/feedback.component';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [
    CommonModule,
    ScoreCardComponent,
    SkillMatchComponent,
    FeedbackComponent
  ],
  template: `
    <div class="result-container">
      <div class="result-header">
        <div class="header-content">
          <button class="back-button" (click)="goBack()">
            ← Back to Analysis
          </button>
          <div class="header-text">
            <h1 class="page-title">Analysis Results</h1>
            <p class="page-subtitle">
              for <strong>{{ jobRole }}</strong>
            </p>
          </div>
          <div class="header-actions">
            <button class="action-button secondary" (click)="downloadReport()">
              📥 Download Report
            </button>
            <button class="action-button primary" (click)="analyzeAnother()">
              🔄 Analyze Another
            </button>
          </div>
        </div>
      </div>

      <div class="result-content">
        <!-- Overall Score Section -->
        <app-score-card></app-score-card>

        <!-- Skills Analysis Section -->
        <app-skill-match></app-skill-match>

        <!-- AI Feedback & Roadmap Section -->
        <app-feedback></app-feedback>

        <!-- Action Panel -->
        <div class="action-panel">
          <div class="panel-content">
            <div class="panel-icon">🎯</div>
            <div class="panel-text">
              <h3>Ready to improve your resume?</h3>
              <p>Use the feedback and roadmap above to strengthen your application and increase your match score.</p>
            </div>
          </div>
          <div class="panel-actions">
            <button class="panel-button" (click)="analyzeAnother()">
              Analyze Another Resume
            </button>
            <button class="panel-button secondary" (click)="goBack()">
              Modify Current Analysis
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State (for when no data is available) -->
      <div class="empty-state" *ngIf="false">
        <div class="empty-icon">📊</div>
        <h2>No Analysis Results Available</h2>
        <p>Please upload a resume and select a job role to see your analysis results.</p>
        <button class="cta-button" (click)="goBack()">
          Start New Analysis
        </button>
      </div>
    </div>
  `,
  styles: [`
    .result-container {
      min-height: calc(100vh - 120px);
      background: #f7fafc;
    }

    .result-header {
      background: white;
      border-bottom: 2px solid #e2e8f0;
      padding: 2rem 0;
      margin-bottom: 2rem;
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .back-button {
      background: none;
      border: none;
      color: #667eea;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s;
      width: fit-content;
    }

    .back-button:hover {
      gap: 0.75rem;
      color: #764ba2;
    }

    .header-text {
      text-align: center;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: #1a202c;
      margin: 0 0 0.5rem 0;
    }

    .page-subtitle {
      font-size: 1.25rem;
      color: #718096;
      margin: 0;
    }

    .page-subtitle strong {
      color: #667eea;
      font-weight: 700;
    }

    .header-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .action-button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .action-button.primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
    }

    .action-button.primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .action-button.secondary {
      background: white;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .action-button.secondary:hover {
      background: #f7fafc;
    }

    .result-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem 3rem 1.5rem;
    }

    .action-panel {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 16px;
      padding: 2.5rem;
      margin-top: 2rem;
      box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
    }

    .panel-content {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      margin-bottom: 2rem;
    }

    .panel-icon {
      font-size: 4rem;
      flex-shrink: 0;
    }

    .panel-text h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.75rem;
      font-weight: 700;
    }

    .panel-text p {
      margin: 0;
      font-size: 1.1rem;
      opacity: 0.95;
      line-height: 1.6;
    }

    .panel-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .panel-button {
      padding: 1rem 2rem;
      border: 2px solid white;
      background: white;
      color: #667eea;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .panel-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .panel-button.secondary {
      background: transparent;
      color: white;
    }

    .panel-button.secondary:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .empty-state {
      max-width: 600px;
      margin: 4rem auto;
      text-align: center;
      padding: 3rem;
    }

    .empty-icon {
      font-size: 5rem;
      margin-bottom: 1.5rem;
    }

    .empty-state h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #2d3748;
      margin: 0 0 1rem 0;
    }

    .empty-state p {
      font-size: 1.1rem;
      color: #718096;
      margin: 0 0 2rem 0;
      line-height: 1.6;
    }

    .cta-button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .page-subtitle {
        font-size: 1rem;
      }

      .header-actions {
        flex-direction: column;
      }

      .action-button {
        width: 100%;
        justify-content: center;
      }

      .result-content {
        padding: 0 1rem 2rem 1rem;
      }

      .panel-content {
        flex-direction: column;
        text-align: center;
      }

      .panel-actions {
        flex-direction: column;
      }

      .panel-button {
        width: 100%;
      }
    }
  `]
})
export class ResultPageComponent {
  // Mock data for Phase 1
  jobRole: string = 'Machine Learning Engineer';

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/analyze']);
  }

  analyzeAnother(): void {
    this.router.navigate(['/analyze']);
  }

  downloadReport(): void {
    // Phase 1: Just show alert
    // Later phases: Generate and download PDF report
    alert('Download feature will be implemented in next phase!');
  }
}
