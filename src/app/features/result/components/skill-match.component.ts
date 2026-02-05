import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-match',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skill-match">
      <div class="section-header">
        <h3 class="section-title">Skills Analysis</h3>
        <div class="match-summary">
          <span class="match-percentage">{{ getMatchPercentage() }}% Match</span>
          <span class="match-stats">{{ matchedSkills.length }} of {{ totalSkills }} skills</span>
        </div>
      </div>

      <div class="skills-grid">
        <div class="skill-category matched">
          <div class="category-header">
            <span class="category-icon">✓</span>
            <h4>Matched Skills</h4>
            <span class="count-badge">{{ matchedSkills.length }}</span>
          </div>
          <div class="skill-list">
            <span *ngFor="let skill of matchedSkills" class="skill-tag matched">
              {{ skill }}
            </span>
          </div>
          <p class="category-note" *ngIf="matchedSkills.length === 0">
            No matched skills found
          </p>
        </div>

        <div class="skill-category missing">
          <div class="category-header">
            <span class="category-icon">⚠</span>
            <h4>Missing Skills</h4>
            <span class="count-badge">{{ missingSkills.length }}</span>
          </div>
          <div class="skill-list">
            <span *ngFor="let skill of missingSkills" class="skill-tag missing">
              {{ skill }}
            </span>
          </div>
          <p class="category-note" *ngIf="missingSkills.length === 0">
            Great! You have all required skills
          </p>
        </div>
      </div>

      <div class="recommendations" *ngIf="missingSkills.length > 0">
        <h4 class="recommendations-title">
          <span class="rec-icon">💡</span>
          Skill Development Recommendations
        </h4>
        <ul class="recommendations-list">
          <li *ngFor="let skill of missingSkills.slice(0, 3)">
            <strong>{{ skill }}:</strong> Consider taking online courses or building projects to demonstrate this skill
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .skill-match {
      background: white;
      border-radius: 16px;
      padding: 2.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      margin-bottom: 2rem;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #e2e8f0;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .section-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #2d3748;
      margin: 0;
    }

    .match-summary {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.25rem;
    }

    .match-percentage {
      font-size: 1.5rem;
      font-weight: 700;
      color: #667eea;
    }

    .match-stats {
      font-size: 0.875rem;
      color: #718096;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .skill-category {
      padding: 1.5rem;
      border-radius: 12px;
      border: 2px solid;
    }

    .skill-category.matched {
      background: #f0fff4;
      border-color: #48bb78;
    }

    .skill-category.missing {
      background: #fff5f5;
      border-color: #fc8181;
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
    }

    .category-icon {
      font-size: 1.5rem;
    }

    .category-header h4 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #2d3748;
      flex: 1;
    }

    .count-badge {
      background: white;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.875rem;
      font-weight: 700;
      color: #2d3748;
    }

    .skill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-tag {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      display: inline-block;
    }

    .skill-tag.matched {
      background: #48bb78;
      color: white;
    }

    .skill-tag.missing {
      background: #fc8181;
      color: white;
    }

    .category-note {
      margin: 1rem 0 0 0;
      font-size: 0.9rem;
      color: #718096;
      font-style: italic;
    }

    .recommendations {
      background: #edf2f7;
      padding: 1.5rem;
      border-radius: 12px;
      border-left: 4px solid #667eea;
    }

    .recommendations-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0 0 1rem 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: #2d3748;
    }

    .rec-icon {
      font-size: 1.5rem;
    }

    .recommendations-list {
      margin: 0;
      padding-left: 1.5rem;
      color: #4a5568;
      line-height: 1.8;
    }

    .recommendations-list li {
      margin: 0.75rem 0;
    }

    .recommendations-list strong {
      color: #667eea;
    }

    @media (max-width: 768px) {
      .skill-match {
        padding: 1.5rem;
      }

      .section-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .match-summary {
        align-items: flex-start;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillMatchComponent {
  // Mock data for Phase 1 UI
  matchedSkills: string[] = [
    'Python',
    'Machine Learning',
    'SQL',
    'Data Analysis',
    'Statistics',
    'Pandas',
    'NumPy'
  ];

  missingSkills: string[] = [
    'TensorFlow',
    'Deep Learning',
    'Apache Spark',
    'AWS',
    'Docker'
  ];

  get totalSkills(): number {
    return this.matchedSkills.length + this.missingSkills.length;
  }

  getMatchPercentage(): number {
    if (this.totalSkills === 0) return 0;
    return Math.round((this.matchedSkills.length / this.totalSkills) * 100);
  }
}
