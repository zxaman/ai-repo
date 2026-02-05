import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analyze-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="analyze-button-container">
      <button 
        class="analyze-button"
        [disabled]="!canAnalyze || isAnalyzing"
        (click)="onAnalyze()"
      >
        <span *ngIf="!isAnalyzing">
          <span class="button-icon">🚀</span>
          Analyze Resume
        </span>
        <span *ngIf="isAnalyzing" class="analyzing-state">
          <span class="spinner"></span>
          Analyzing...
        </span>
      </button>

      <div class="button-info" *ngIf="!canAnalyze">
        <span class="info-icon">ℹ️</span>
        Please select a job role and upload your resume to continue
      </div>

      <div class="analysis-note" *ngIf="canAnalyze && !isAnalyzing">
        <strong>Ready to analyze!</strong> Your resume will be evaluated using:
        <ul>
          <li>Skill matching (40% weight)</li>
          <li>Semantic similarity (25% weight)</li>
          <li>Experience alignment (20% weight)</li>
          <li>Project relevance (15% weight)</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .analyze-button-container {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 2px solid #e2e8f0;
    }

    .analyze-button {
      width: 100%;
      padding: 1.25rem 2rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: white;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }

    .analyze-button:hover:not(:disabled) {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }

    .analyze-button:disabled {
      background: #cbd5e0;
      cursor: not-allowed;
      box-shadow: none;
      transform: none;
    }

    .button-icon {
      font-size: 1.5rem;
    }

    .analyzing-state {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .button-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1rem;
      padding: 0.875rem 1rem;
      background: #fef5e7;
      border-left: 4px solid #f39c12;
      border-radius: 6px;
      color: #996300;
      font-size: 0.9rem;
    }

    .info-icon {
      font-size: 1.25rem;
      flex-shrink: 0;
    }

    .analysis-note {
      margin-top: 1rem;
      padding: 1rem;
      background: #e6f2ff;
      border-left: 4px solid #667eea;
      border-radius: 6px;
      font-size: 0.9rem;
      color: #2d3748;
      line-height: 1.6;
    }

    .analysis-note strong {
      color: #667eea;
      display: block;
      margin-bottom: 0.5rem;
    }

    .analysis-note ul {
      margin: 0.5rem 0 0 1.25rem;
      padding: 0;
    }

    .analysis-note li {
      margin: 0.25rem 0;
      color: #4a5568;
    }
  `]
})
export class AnalyzeButtonComponent {
  @Input() canAnalyze: boolean = false;
  @Input() isAnalyzing: boolean = false;
  @Output() analyze = new EventEmitter<void>();

  onAnalyze(): void {
    if (this.canAnalyze && !this.isAnalyzing) {
      this.analyze.emit();
    }
  }
}
