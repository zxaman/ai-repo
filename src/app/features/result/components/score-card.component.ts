import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="score-card">
      <div class="score-main">
        <div class="score-circle">
          <svg class="progress-ring" width="200" height="200">
            <circle
              class="progress-ring-circle-bg"
              stroke="#e2e8f0"
              stroke-width="12"
              fill="transparent"
              r="90"
              cx="100"
              cy="100"
            />
            <circle
              class="progress-ring-circle"
              [attr.stroke-dasharray]="circumference + ' ' + circumference"
              [style.stroke-dashoffset]="strokeDashoffset"
              stroke="url(#gradient)"
              stroke-width="12"
              fill="transparent"
              r="90"
              cx="100"
              cy="100"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          <div class="score-content">
            <div class="score-value">{{ mockScore }}</div>
            <div class="score-label">/ 100</div>
          </div>
        </div>
        
        <div class="score-info">
          <div class="score-grade" [ngClass]="'grade-' + getGrade()">
            Grade: {{ getGrade() }}
          </div>
          <p class="score-description">{{ getDescription() }}</p>
        </div>
      </div>

      <div class="score-breakdown">
        <h3 class="breakdown-title">Score Breakdown</h3>
        <div class="breakdown-items">
          <div class="breakdown-item" *ngFor="let item of breakdownItems">
            <div class="breakdown-header">
              <span class="breakdown-name">{{ item.name }}</span>
              <span class="breakdown-score">{{ item.score }}/100</span>
            </div>
            <div class="breakdown-bar">
              <div class="breakdown-fill" [style.width.%]="item.score"></div>
            </div>
            <div class="breakdown-weight">
              Weight: {{ item.weight }}% • Contribution: {{ item.contribution.toFixed(1) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .score-card {
      background: white;
      border-radius: 16px;
      padding: 2.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      margin-bottom: 2rem;
    }

    .score-main {
      display: flex;
      gap: 3rem;
      align-items: center;
      padding-bottom: 2rem;
      border-bottom: 2px solid #e2e8f0;
      margin-bottom: 2rem;
    }

    .score-circle {
      position: relative;
      flex-shrink: 0;
    }

    .progress-ring {
      transform: rotate(-90deg);
    }

    .progress-ring-circle {
      transition: stroke-dashoffset 1s ease-in-out;
    }

    .score-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    .score-value {
      font-size: 3.5rem;
      font-weight: 800;
      color: #2d3748;
      line-height: 1;
    }

    .score-label {
      font-size: 1.25rem;
      color: #718096;
      margin-top: 0.25rem;
    }

    .score-info {
      flex: 1;
    }

    .score-grade {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    .score-grade.grade-a { color: #48bb78; }
    .score-grade.grade-b { color: #38b2ac; }
    .score-grade.grade-c { color: #ed8936; }
    .score-grade.grade-d { color: #e53e3e; }
    .score-grade.grade-f { color: #c53030; }

    .score-description {
      font-size: 1.1rem;
      color: #4a5568;
      line-height: 1.6;
      margin: 0;
    }

    .breakdown-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #2d3748;
      margin: 0 0 1.5rem 0;
    }

    .breakdown-items {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .breakdown-item {
      padding: 1rem;
      background: #f7fafc;
      border-radius: 10px;
    }

    .breakdown-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }

    .breakdown-name {
      font-weight: 600;
      color: #2d3748;
      font-size: 1rem;
    }

    .breakdown-score {
      font-weight: 700;
      color: #667eea;
      font-size: 1.1rem;
    }

    .breakdown-bar {
      height: 10px;
      background: #e2e8f0;
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 0.5rem;
    }

    .breakdown-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      transition: width 1s ease-out;
    }

    .breakdown-weight {
      font-size: 0.875rem;
      color: #718096;
    }

    @media (max-width: 768px) {
      .score-card {
        padding: 1.5rem;
      }

      .score-main {
        flex-direction: column;
        gap: 2rem;
      }

      .score-value {
        font-size: 2.5rem;
      }

      .score-grade {
        font-size: 2rem;
      }
    }
  `]
})
export class ScoreCardComponent {
  // Mock data for Phase 1 UI
  mockScore: number = 75;
  circumference: number = 2 * Math.PI * 90;

  breakdownItems = [
    { name: 'Skill Match', score: 82, weight: 40, contribution: 32.8 },
    { name: 'Semantic Similarity', score: 68, weight: 25, contribution: 17.0 },
    { name: 'Experience Alignment', score: 75, weight: 20, contribution: 15.0 },
    { name: 'Project Relevance', score: 70, weight: 15, contribution: 10.5 }
  ];

  get strokeDashoffset(): number {
    return this.circumference - (this.mockScore / 100) * this.circumference;
  }

  getGrade(): string {
    if (this.mockScore >= 85) return 'A';
    if (this.mockScore >= 70) return 'B';
    if (this.mockScore >= 55) return 'C';
    if (this.mockScore >= 40) return 'D';
    return 'F';
  }

  getDescription(): string {
    const grade = this.getGrade();
    const descriptions: Record<string, string> = {
      'A': 'Excellent fit for the role! Your resume strongly aligns with job requirements.',
      'B': 'Strong candidate. Your resume shows good alignment with most requirements.',
      'C': 'Moderate fit. Consider improving key areas to strengthen your application.',
      'D': 'Needs improvement. Focus on developing critical skills for this role.',
      'F': 'Significant gaps detected. Consider targeting roles that better match your profile.'
    };
    return descriptions[grade] || '';
  }
}
