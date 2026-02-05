# 🌳 Component Architecture Tree

## Application Structure Overview

```
App Component (Root)
│
├── Header Component (Always Visible)
│   ├── Logo/Branding
│   └── Navigation Links
│       ├── Home
│       └── Analyze
│
└── Router Outlet (Dynamic Pages)
    │
    ├── Home Page Component (/)
    │   ├── Hero Section
    │   ├── Features Grid
    │   │   ├── Feature Card 1: Job-Specific Analysis
    │   │   ├── Feature Card 2: NLP Matching
    │   │   ├── Feature Card 3: Transparent Scoring
    │   │   └── Feature Card 4: Actionable Feedback
    │   ├── How It Works Section
    │   │   ├── Step 1: Select Role
    │   │   ├── Step 2: Upload Resume
    │   │   ├── Step 3: Add JD (Optional)
    │   │   └── Step 4: Get Results
    │   └── CTA Button → Navigate to /analyze
    │
    ├── Resume Analysis Component (/analyze)
    │   ├── Page Header
    │   ├── Form Card 1: Job Information
    │   │   ├── Role Selector Component
    │   │   │   └── Dropdown (10 job roles)
    │   │   └── Job Description Component
    │   │       ├── Toggle Checkbox
    │   │       └── Textarea (conditional)
    │   ├── Form Card 2: Resume Upload
    │   │   └── Resume Upload Component
    │   │       ├── Drag & Drop Zone
    │   │       ├── File Input
    │   │       ├── File Preview
    │   │       └── Validation Messages
    │   ├── Form Card 3: Analyze
    │   │   └── Analyze Button Component
    │   │       ├── Button (conditional disabled)
    │   │       └── Info Messages
    │   └── Info Cards Section
    │       ├── What We Analyze Card
    │       └── Privacy & Security Card
    │
    └── Result Page Component (/results)
        ├── Result Header
        │   ├── Back Button
        │   ├── Page Title
        │   └── Action Buttons
        │       ├── Download Report (future)
        │       └── Analyze Another
        ├── Score Card Component
        │   ├── Main Score Display
        │   │   ├── Circular Progress (SVG)
        │   │   ├── Score Number (0-100)
        │   │   └── Grade Letter (A-F)
        │   └── Score Breakdown
        │       ├── Skill Match (40%)
        │       ├── Semantic Similarity (25%)
        │       ├── Experience Alignment (20%)
        │       └── Project Relevance (15%)
        ├── Skill Match Component
        │   ├── Section Header
        │   │   └── Match Percentage
        │   ├── Matched Skills Grid
        │   │   └── Skill Tags (green)
        │   ├── Missing Skills Grid
        │   │   └── Skill Tags (red)
        │   └── Recommendations Box
        ├── Feedback Component
        │   ├── AI Feedback Section
        │   │   └── Generated Text
        │   ├── Strengths & Improvements
        │   │   ├── Strengths Card
        │   │   └── Improvements Card
        │   ├── Improvement Roadmap
        │   │   ├── High Priority Items
        │   │   ├── Medium Priority Items
        │   │   └── Low Priority Items
        │   └── ATS Tips Section
        │       └── Tip Cards Grid
        └── Action Panel
            └── Next Steps CTA
```

---

## Component Responsibility Matrix

### Core Components

| Component | Purpose | State | Children |
|-----------|---------|-------|----------|
| **App** | Root shell | None | Header, Router Outlet |
| **Header** | Navigation | None | Logo, Nav Links |

---

### Feature Components: Home

| Component | Purpose | State | Props |
|-----------|---------|-------|-------|
| **Home** | Landing page | None | None |

**Sub-sections** (inline):
- Hero Section
- Features Grid (4 cards)
- How It Works (4 steps)
- CTA Button

---

### Feature Components: Resume Analysis

| Component | Purpose | State | Props | Outputs |
|-----------|---------|-------|-------|---------|
| **ResumeAnalysis** | Main container | `selectedFile`, `isAnalyzing` | None | None |
| **RoleSelector** | Job role picker | `selectedRole` | None | `roleChange` |
| **JobDescription** | Optional JD input | `showJdInput`, `jobDescription` | None | `jdChanged`, `toggleChanged` |
| **ResumeUpload** | File handler | `selectedFile`, `errorMessage` | None | `fileSelected` |
| **AnalyzeButton** | Trigger analysis | None | `canAnalyze`, `isAnalyzing` | `analyze` |

---

### Feature Components: Result

| Component | Purpose | State | Props |
|-----------|---------|-------|-------|
| **ResultPage** | Results container | `jobRole` | None |
| **ScoreCard** | Score visualization | `mockScore`, `breakdownItems` | None |
| **SkillMatch** | Skills comparison | `matchedSkills`, `missingSkills` | None |
| **Feedback** | AI insights | `aiGeneratedFeedback`, `roadmapItems` | None |

---

## Data Flow (Phase 1)

```
User Interaction
    ↓
Component Event
    ↓
Local State Update
    ↓
UI Re-render
```

**Note**: Phase 1 uses only local component state. No services or API calls yet.

---

## File Organization

```
app/
├── core/                    # App-wide singleton components
│   └── components/
│       └── header.component.ts
│
├── shared/                  # Reusable across features
│   ├── models/
│   │   └── job-role.model.ts
│   └── services/            # (Empty in Phase 1)
│
└── features/                # Feature modules
    ├── home/                # Landing page
    │   └── home.component.ts
    │
    ├── resume-analysis/     # Analysis workflow
    │   ├── resume-analysis.component.ts
    │   └── components/
    │       ├── role-selector.component.ts
    │       ├── job-description.component.ts
    │       ├── resume-upload.component.ts
    │       └── analyze-button.component.ts
    │
    └── result/              # Results display
        ├── result-page.component.ts
        └── components/
            ├── score-card.component.ts
            ├── skill-match.component.ts
            └── feedback.component.ts
```

---

## Component Communication Patterns

### Parent → Child (Input)
```typescript
// ResumeAnalysis → AnalyzeButton
<app-analyze-button 
  [canAnalyze]="canAnalyze()"
  [isAnalyzing]="isAnalyzing">
</app-analyze-button>
```

### Child → Parent (Output)
```typescript
// ResumeUpload → ResumeAnalysis
<app-resume-upload 
  (fileSelected)="onFileSelected($event)">
</app-resume-upload>
```

### Sibling Communication
Currently handled by parent component (ResumeAnalysis).  
Phase 2 will introduce services for cross-component communication.

---

## Routing Structure

```
/ (Home)
    ↓ [Start Analysis Button]
/analyze (Resume Analysis)
    ↓ [Analyze Button]
/results (Results Page)
    ↓ [Back/Analyze Another]
/analyze or /
```

---

## Styling Architecture

```
Global Styles (styles.scss)
    ↓
App Component (app.scss)
    ↓
Feature Components (inline styles)
```

**Approach**: Component-scoped styles for encapsulation.

---

## Component Size Guidelines

| Component | Lines of Code | Complexity |
|-----------|--------------|------------|
| Header | ~120 | Simple |
| Home | ~220 | Medium |
| RoleSelector | ~90 | Simple |
| JobDescription | ~150 | Medium |
| ResumeUpload | ~220 | Complex |
| AnalyzeButton | ~130 | Simple |
| ResumeAnalysis | ~180 | Medium |
| ScoreCard | ~250 | Complex |
| SkillMatch | ~200 | Medium |
| Feedback | ~330 | Complex |
| ResultPage | ~200 | Medium |

---

## Standalone Components

All components use Angular's **standalone** pattern:
- No NgModule declarations
- Direct imports in component decorator
- Easier testing and tree-shaking

Example:
```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // ...
})
```

---

## Future Enhancements (Phase 2+)

### Services to Add:
- `ResumeService` - API communication
- `AnalyticsService` - Track user behavior
- `StorageService` - Local storage management
- `ErrorService` - Global error handling

### State Management:
- Consider NgRx or Signals for complex state
- Implement caching strategies
- Add loading indicators

---

This architecture provides:
✅ Clear separation of concerns  
✅ Reusable components  
✅ Easy to test  
✅ Scalable for Phase 2+  
✅ Maintainable code structure
