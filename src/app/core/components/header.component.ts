import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="app-header">
      <div class="container">
        <div class="header-content">
          <div class="branding">
            <h1 class="logo" routerLink="/">AI Resume Analyzer</h1>
            <p class="subtitle">Analyze your resume based on job roles</p>
          </div>
          <nav class="navigation">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
            <a routerLink="/analyze" routerLinkActive="active" class="nav-link">Analyze</a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .app-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1.5rem 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .branding {
      flex: 1;
      min-width: 200px;
    }

    .logo {
      margin: 0;
      font-size: 1.75rem;
      font-weight: 700;
      cursor: pointer;
      transition: opacity 0.3s;
    }

    .logo:hover {
      opacity: 0.9;
    }

    .subtitle {
      margin: 0.25rem 0 0 0;
      font-size: 0.95rem;
      opacity: 0.9;
      font-weight: 300;
    }

    .navigation {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      transition: all 0.3s;
      position: relative;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .nav-link.active {
      background: rgba(255, 255, 255, 0.2);
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        align-items: flex-start;
      }

      .navigation {
        width: 100%;
        justify-content: flex-start;
      }

      .logo {
        font-size: 1.5rem;
      }

      .subtitle {
        font-size: 0.85rem;
      }
    }
  `]
})
export class HeaderComponent { }
