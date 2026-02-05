import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="role-selector">
      <label for="job-role" class="section-label">
        <span class="label-text">Select Job Role</span>
        <span class="required">*</span>
      </label>
      <select 
        id="job-role" 
        class="form-select"
        [(ngModel)]="selectedRole"
        (ngModelChange)="onRoleChange($event)"
      >
        <option value="" disabled>Choose a job role</option>
        <option *ngFor="let role of jobRoles" [value]="role">{{ role }}</option>
      </select>
      <p class="help-text">Select the position you're applying for</p>
    </div>
  `,
  styles: [`
    .role-selector {
      margin-bottom: 2rem;
    }

    .section-label {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 1.1rem;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 0.75rem;
    }

    .required {
      color: #e53e3e;
      font-size: 1.2rem;
    }

    .form-select {
      width: 100%;
      padding: 0.875rem 1rem;
      font-size: 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      background: white;
      color: #2d3748;
      cursor: pointer;
      transition: all 0.3s;
    }

    .form-select:hover {
      border-color: #cbd5e0;
    }

    .form-select:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .help-text {
      margin: 0.5rem 0 0 0;
      font-size: 0.875rem;
      color: #718096;
    }
  `]
})
export class RoleSelectorComponent {
  jobRoles: string[] = [
    'Data Analyst',
    'Data Scientist',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Engineer',
    'DevOps Engineer',
    'Software Engineer',
    'Product Manager',
    'UI/UX Designer'
  ];

  selectedRole: string = '';

  onRoleChange(role: string): void {
    // Will be used to emit changes to parent component
    console.log('Selected role:', role);
  }
}
