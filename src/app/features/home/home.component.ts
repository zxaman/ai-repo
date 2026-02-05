import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">AI-Powered Resume Analysis</h1>
          <p class="hero-subtitle">
            Get instant, data-driven feedback on your resume using advanced NLP and custom scoring algorithms
          </p>
          
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🎯</div>
              <h3>Job-Specific Analysis</h3>
              <p>Evaluate your resume against specific job roles with tailored scoring</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">🧠</div>
              <h3>NLP-Powered Matching</h3>
              <p>Semantic similarity detection goes beyond simple keyword matching</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">📊</div>
              <h3>Transparent Scoring</h3>
              <p>See exactly how your score is calculated with detailed breakdowns</p>
            </div>
            
            <div class="feature-card">
              <div class="feature-icon">💡</div>
              <h3>Actionable Feedback</h3>
              <p>Get AI-generated suggestions to improve your resume and close skill gaps</p>
            </div>
          </div>

          <div class="how-it-works">
            <h2>How It Works</h2>
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h3>Select Job Role</h3>
                  <p>Choose the position you're targeting from our curated list</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h3>Upload Resume</h3>
                  <p>Submit your resume in PDF or DOCX format</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h3>Add Job Description (Optional)</h3>
                  <p>Paste a specific job description for more precise analysis</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h3>Get Results</h3>
                  <p>Receive your score, skill gaps, and improvement roadmap</p>
                </div>
              </div>
            </div>
          </div>

          <div class="cta-section">
            <button class="cta-button" (click)="navigateToAnalysis()">
              Start Analysis
              <span class="arrow">→</span>
            </button>
            <p class="cta-note">No sign-up required • Takes less than 2 minutes</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: calc(100vh - 120px);
      background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
    }

    .hero-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 1.5rem;
    }

    .hero-content {
      text-align: center;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 800;
      color: #1a202c;
      margin: 0 0 1rem 0;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: #4a5568;
      max-width: 700px;
      margin: 0 auto 3rem auto;
      line-height: 1.6;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
      transition: all 0.3s;
      text-align: left;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.12);
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      color: #2d3748;
      font-size: 1.25rem;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
    }

    .feature-card p {
      color: #718096;
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .how-it-works {
      margin: 5rem 0 4rem 0;
    }

    .how-it-works h2 {
      font-size: 2rem;
      color: #1a202c;
      margin-bottom: 2.5rem;
      font-weight: 700;
    }

    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .step {
      display: flex;
      gap: 1rem;
      align-items: start;
      text-align: left;
    }

    .step-number {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      flex-shrink: 0;
    }

    .step-content h3 {
      color: #2d3748;
      font-size: 1.1rem;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
    }

    .step-content p {
      color: #718096;
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .cta-section {
      margin-top: 4rem;
    }

    .cta-button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 1.25rem 3rem;
      font-size: 1.25rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s;
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }

    .cta-button .arrow {
      font-size: 1.5rem;
      transition: transform 0.3s;
    }

    .cta-button:hover .arrow {
      transform: translateX(5px);
    }

    .cta-note {
      margin-top: 1rem;
      color: #718096;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .steps {
        grid-template-columns: 1fr;
      }

      .cta-button {
        font-size: 1.1rem;
        padding: 1rem 2rem;
      }
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToAnalysis(): void {
    this.router.navigate(['/analyze']);
  }
}
