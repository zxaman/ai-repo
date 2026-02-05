import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="feedback-container">
      <div class="feedback-section">
        <div class="section-header">
          <h3 class="section-title">
            <span class="title-icon">🤖</span>
            AI-Generated Feedback
          </h3>
          <span class="beta-badge">Powered by AI</span>
        </div>

        <div class="feedback-content">
          <p>{{ aiGeneratedFeedback }}</p>
        </div>

        <div class="feedback-categories">
          <div class="category-card">
            <div class="category-icon">💪</div>
            <h4>Strengths</h4>
            <ul>
              <li *ngFor="let strength of strengths">{{ strength }}</li>
            </ul>
          </div>

          <div class="category-card">
            <div class="category-icon">📈</div>
            <h4>Areas to Improve</h4>
            <ul>
              <li *ngFor="let improvement of improvements">{{ improvement }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="roadmap-section">
        <div class="section-header">
          <h3 class="section-title">
            <span class="title-icon">🗺️</span>
            Improvement Roadmap
          </h3>
        </div>

        <div class="roadmap-timeline">
          <div class="roadmap-item" *ngFor="let item of roadmapItems; let i = index">
            <div class="timeline-marker" [ngClass]="item.priority">
              {{ i + 1 }}
            </div>
            <div class="roadmap-card" [ngClass]="item.priority">
              <div class="roadmap-header">
                <h4 class="roadmap-title">{{ item.action }}</h4>
                <span class="priority-badge" [ngClass]="item.priority">
                  {{ item.priority }}
                </span>
              </div>
              <p class="roadmap-description">{{ item.description }}</p>
              <div class="roadmap-footer">
                <span class="timeline-estimate">
                  <span class="clock-icon">⏱️</span>
                  {{ item.timeline }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ats-tips">
        <div class="section-header">
          <h3 class="section-title">
            <span class="title-icon">📝</span>
            ATS Optimization Tips
          </h3>
        </div>
        <div class="tips-grid">
          <div class="tip-card" *ngFor="let tip of atsTips">
            <div class="tip-icon">{{ tip.icon }}</div>
            <div class="tip-content">
              <h5>{{ tip.title }}</h5>
              <p>{{ tip.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .feedback-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .feedback-section,
    .roadmap-section,
    .ats-tips {
      background: white;
      border-radius: 16px;
      padding: 2.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.75rem;
      font-weight: 700;
      color: #2d3748;
      margin: 0;
    }

    .title-icon {
      font-size: 2rem;
    }

    .beta-badge {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 0.375rem 1rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .feedback-content {
      padding: 1.5rem;
      background: #f7fafc;
      border-left: 4px solid #667eea;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .feedback-content p {
      margin: 0;
      line-height: 1.8;
      color: #2d3748;
      font-size: 1rem;
    }

    .feedback-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .category-card {
      padding: 1.5rem;
      background: #f7fafc;
      border-radius: 12px;
      border: 2px solid #e2e8f0;
    }

    .category-icon {
      font-size: 2rem;
      margin-bottom: 0.75rem;
    }

    .category-card h4 {
      margin: 0 0 1rem 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #2d3748;
    }

    .category-card ul {
      margin: 0;
      padding-left: 1.25rem;
      color: #4a5568;
      line-height: 1.8;
    }

    .category-card li {
      margin: 0.5rem 0;
    }

    .roadmap-timeline {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      position: relative;
      padding-left: 2.5rem;
    }

    .roadmap-timeline::before {
      content: '';
      position: absolute;
      left: 15px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #e2e8f0;
    }

    .roadmap-item {
      position: relative;
      display: flex;
      gap: 1.5rem;
      align-items: start;
    }

    .timeline-marker {
      position: absolute;
      left: -2.5rem;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: white;
      font-size: 0.875rem;
      z-index: 1;
    }

    .timeline-marker.high {
      background: #fc8181;
    }

    .timeline-marker.medium {
      background: #f6ad55;
    }

    .timeline-marker.low {
      background: #68d391;
    }

    .roadmap-card {
      flex: 1;
      padding: 1.5rem;
      border-radius: 12px;
      border: 2px solid;
      transition: all 0.3s;
    }

    .roadmap-card:hover {
      transform: translateX(5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .roadmap-card.high {
      background: #fff5f5;
      border-color: #fc8181;
    }

    .roadmap-card.medium {
      background: #fffaf0;
      border-color: #f6ad55;
    }

    .roadmap-card.low {
      background: #f0fff4;
      border-color: #68d391;
    }

    .roadmap-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 0.75rem;
      gap: 1rem;
    }

    .roadmap-title {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: #2d3748;
    }

    .priority-badge {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .priority-badge.high {
      background: #fc8181;
      color: white;
    }

    .priority-badge.medium {
      background: #f6ad55;
      color: white;
    }

    .priority-badge.low {
      background: #68d391;
      color: white;
    }

    .roadmap-description {
      margin: 0 0 1rem 0;
      color: #4a5568;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .roadmap-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .timeline-estimate {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: #718096;
      font-weight: 500;
    }

    .clock-icon {
      font-size: 1rem;
    }

    .tips-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .tip-card {
      display: flex;
      gap: 1rem;
      padding: 1.25rem;
      background: #f7fafc;
      border-radius: 10px;
      border-left: 4px solid #667eea;
    }

    .tip-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .tip-content h5 {
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
      font-weight: 600;
      color: #2d3748;
    }

    .tip-content p {
      margin: 0;
      font-size: 0.9rem;
      color: #4a5568;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .feedback-section,
      .roadmap-section,
      .ats-tips {
        padding: 1.5rem;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .feedback-categories,
      .tips-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FeedbackComponent {
  // Mock data for Phase 1 UI
  aiGeneratedFeedback: string = 'Your resume demonstrates strong technical skills in Python, data analysis, and SQL. However, to strengthen your application for a Machine Learning Engineer role, consider adding more details about your experience with deep learning frameworks and cloud deployment. Your project work shows practical application of skills, which is valuable. Focus on quantifying your achievements and highlighting the impact of your work.';

  strengths: string[] = [
    'Strong foundation in Python and data analysis',
    'Relevant project experience demonstrating practical skills',
    'Good understanding of core ML concepts',
    'Clear and well-structured resume format'
  ];

  improvements: string[] = [
    'Add more details about deep learning experience',
    'Include cloud platform experience (AWS, Azure, GCP)',
    'Quantify achievements with specific metrics',
    'Expand on MLOps and model deployment experience'
  ];

  roadmapItems = [
    {
      priority: 'high',
      action: 'Acquire Missing Core Skills',
      description: 'Focus on TensorFlow, Deep Learning, and Apache Spark. These are critical for the target role and will significantly improve your match score.',
      timeline: '2-4 weeks per skill'
    },
    {
      priority: 'high',
      action: 'Build Portfolio Projects',
      description: 'Create 2-3 projects demonstrating ML model development, training, and deployment. Include them in your resume with quantifiable results.',
      timeline: '4-6 weeks'
    },
    {
      priority: 'medium',
      action: 'Gain Cloud Platform Experience',
      description: 'Get hands-on experience with AWS or Azure ML services. Consider obtaining a certification to validate your knowledge.',
      timeline: '3-5 weeks'
    },
    {
      priority: 'low',
      action: 'Optimize for ATS Systems',
      description: 'Incorporate keywords from job descriptions naturally. Use standard section headers and a clean, parseable format.',
      timeline: '1-2 days'
    }
  ];

  atsTips = [
    {
      icon: '🎯',
      title: 'Use Keywords Strategically',
      description: 'Include exact keywords from job descriptions naturally throughout your resume'
    },
    {
      icon: '📋',
      title: 'Standard Section Headers',
      description: 'Use conventional headers like "Work Experience", "Education", "Skills" for ATS compatibility'
    },
    {
      icon: '🔤',
      title: 'Simple Formatting',
      description: 'Avoid complex tables, images, or unusual fonts that ATS systems may not parse correctly'
    },
    {
      icon: '📄',
      title: 'PDF or DOCX Format',
      description: 'Submit your resume in PDF or DOCX format for best compatibility with ATS systems'
    }
  ];
}
