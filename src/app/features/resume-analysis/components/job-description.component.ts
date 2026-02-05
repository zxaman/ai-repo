import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-description',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="job-description">
      <div class="header-section">
        <label class="section-label">
          <input 
            type="checkbox" 
            [(ngModel)]="showJdInput"
            (ngModelChange)="onToggleChange()"
            class="checkbox"
          />
          <span class="label-text">Add Custom Job Description</span>
          <span class="optional-badge">Optional</span>
        </label>
        <p class="help-text">Paste a specific job description for more accurate analysis</p>
      </div>

      <div class="jd-input-container" *ngIf="showJdInput">
        <textarea
          [(ngModel)]="jobDescription"
          (ngModelChange)="onJdChange($event)"
          class="form-textarea"
          rows="8"
          placeholder="Paste the job description here...

Example: We are looking for a Data Analyst who can work with SQL, Python, and Tableau to create insightful dashboards..."
        ></textarea>
        <div class="character-count">
          {{ jobDescription.length }} characters
        </div>
      </div>

      <div class="info-box" *ngIf="!showJdInput">
        <div class="info-icon">ℹ️</div>
        <div class="info-content">
          <strong>Default Mode:</strong> We'll use our curated role template for analysis.
          Enable custom JD above for role-specific evaluation.
        </div>
      </div>
    </div>
  `,
  styles: [`
    .job-description {
      margin-bottom: 2rem;
    }

    .header-section {
      margin-bottom: 1rem;
    }

    .section-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      color: #2d3748;
      cursor: pointer;
    }

    .checkbox {
      width: 20px;
      height: 20px;
      cursor: pointer;
      accent-color: #667eea;
    }

    .optional-badge {
      background: #edf2f7;
      color: #718096;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;
    }

    .help-text {
      margin: 0.5rem 0 0 1.75rem;
      font-size: 0.875rem;
      color: #718096;
    }

    .jd-input-container {
      margin-top: 1rem;
      position: relative;
    }

    .form-textarea {
      width: 100%;
      padding: 1rem;
      font-size: 0.95rem;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      resize: vertical;
      transition: all 0.3s;
    }

    .form-textarea:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-textarea::placeholder {
      color: #a0aec0;
    }

    .character-count {
      text-align: right;
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: #a0aec0;
    }

    .info-box {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #edf2f7;
      border-left: 4px solid #667eea;
      border-radius: 6px;
      margin-top: 1rem;
    }

    .info-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .info-content {
      font-size: 0.9rem;
      color: #4a5568;
      line-height: 1.5;
    }

    .info-content strong {
      color: #2d3748;
    }
  `]
})
export class JobDescriptionComponent {
  showJdInput: boolean = false;
  jobDescription: string = '';

  @Output() jdChanged = new EventEmitter<string>();
  @Output() toggleChanged = new EventEmitter<boolean>();

  onToggleChange(): void {
    this.toggleChanged.emit(this.showJdInput);
    if (!this.showJdInput) {
      this.jobDescription = '';
      this.jdChanged.emit('');
    }
  }

  onJdChange(value: string): void {
    this.jdChanged.emit(value);
  }
}
