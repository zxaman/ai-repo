import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-upload',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="resume-upload">
      <label class="section-label">
        <span class="label-text">Upload Resume</span>
        <span class="required">*</span>
      </label>

      <div class="upload-area" 
           [class.has-file]="selectedFile"
           [class.drag-over]="isDragOver"
           (click)="fileInput.click()"
           (drop)="onDrop($event)"
           (dragover)="onDragOver($event)"
           (dragleave)="onDragLeave($event)">
        
        <input 
          #fileInput
          type="file" 
          accept=".pdf,.docx,.doc"
          (change)="onFileSelected($event)"
          style="display: none"
        />

        <div class="upload-content" *ngIf="!selectedFile">
          <div class="upload-icon">📄</div>
          <p class="upload-text">
            <strong>Click to upload</strong> or drag and drop
          </p>
          <p class="upload-formats">PDF or DOCX (Max 10MB)</p>
        </div>

        <div class="file-preview" *ngIf="selectedFile">
          <div class="file-icon">✓</div>
          <div class="file-info">
            <p class="file-name">{{ selectedFile.name }}</p>
            <p class="file-size">{{ formatFileSize(selectedFile.size) }}</p>
          </div>
          <button class="remove-button" (click)="removeFile($event)">
            ×
          </button>
        </div>
      </div>

      <p class="help-text" *ngIf="!selectedFile">
        Supported formats: PDF, DOCX, DOC
      </p>

      <div class="error-message" *ngIf="errorMessage">
        <span class="error-icon">⚠️</span>
        {{ errorMessage }}
      </div>
    </div>
  `,
  styles: [`
    .resume-upload {
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

    .upload-area {
      border: 2px dashed #cbd5e0;
      border-radius: 12px;
      padding: 3rem 2rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;
      background: #f7fafc;
    }

    .upload-area:hover {
      border-color: #667eea;
      background: #edf2f7;
    }

    .upload-area.drag-over {
      border-color: #667eea;
      background: #e6f2ff;
      transform: scale(1.02);
    }

    .upload-area.has-file {
      border: 2px solid #48bb78;
      background: #f0fff4;
    }

    .upload-content {
      pointer-events: none;
    }

    .upload-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    .upload-text {
      font-size: 1rem;
      color: #4a5568;
      margin: 0 0 0.5rem 0;
    }

    .upload-text strong {
      color: #667eea;
      font-weight: 600;
    }

    .upload-formats {
      font-size: 0.875rem;
      color: #a0aec0;
      margin: 0;
    }

    .file-preview {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 8px;
    }

    .file-icon {
      width: 50px;
      height: 50px;
      background: #48bb78;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
      flex-shrink: 0;
    }

    .file-info {
      flex: 1;
      text-align: left;
    }

    .file-name {
      margin: 0 0 0.25rem 0;
      font-weight: 600;
      color: #2d3748;
      word-break: break-word;
    }

    .file-size {
      margin: 0;
      font-size: 0.875rem;
      color: #718096;
    }

    .remove-button {
      width: 32px;
      height: 32px;
      background: #feb2b2;
      color: #c53030;
      border: none;
      border-radius: 50%;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      flex-shrink: 0;
    }

    .remove-button:hover {
      background: #fc8181;
      color: white;
    }

    .help-text {
      margin: 0.75rem 0 0 0;
      font-size: 0.875rem;
      color: #718096;
    }

    .error-message {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.75rem;
      padding: 0.75rem 1rem;
      background: #fff5f5;
      border-left: 4px solid #fc8181;
      border-radius: 6px;
      color: #c53030;
      font-size: 0.9rem;
    }

    .error-icon {
      font-size: 1.25rem;
    }
  `]
})
export class ResumeUploadComponent {
  selectedFile: File | null = null;
  errorMessage: string = '';
  isDragOver: boolean = false;

  @Output() fileSelected = new EventEmitter<File | null>();

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.validateAndSetFile(input.files[0]);
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.validateAndSetFile(event.dataTransfer.files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  validateAndSetFile(file: File): void {
    this.errorMessage = '';

    // Check file type
    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword'
    ];

    if (!validTypes.includes(file.type)) {
      this.errorMessage = 'Invalid file type. Please upload PDF or DOCX files only.';
      return;
    }

    // Check file size (10MB max)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      this.errorMessage = 'File size exceeds 10MB. Please upload a smaller file.';
      return;
    }

    this.selectedFile = file;
    this.fileSelected.emit(file);
  }

  removeFile(event: Event): void {
    event.stopPropagation();
    this.selectedFile = null;
    this.errorMessage = '';
    this.fileSelected.emit(null);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  }
}
