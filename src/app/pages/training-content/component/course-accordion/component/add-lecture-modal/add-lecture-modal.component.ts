import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lecture } from '../../../../models/section.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-lecture-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-lecture-modal.component.html',
  styleUrls: ['./add-lecture-modal.component.scss']
})
export class AddLectureModalComponent {
  @Input() isOpen = false;
  @Input() lectureType: 'text' | 'video' | 'pdf' | 'audio' | 'image' | 'test' = 'text';
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Lecture>();

  newLecture: any = {
    titleAr: '',
    titleEn: '',
    type: 'text',
    videoType: 'file', // للفيديو
    testType: 'electronic', // للاختبار
    hasDeadline: 'false' // للاختبار
  };

  getLectureTypeName(type: string): string {
    switch(type) {
      case 'text': return 'نص';
      case 'video': return 'فيديو';
      case 'pdf': return 'وثيقة (PDF)';
      case 'audio': return 'ملف صوت';
      case 'image': return 'ملف صورة';
      case 'test': return 'اختبار';
      default: return 'محاضرة';
    }
  }

  closeModal(): void {
    this.close.emit();
    this.resetForm();
  }

  onSave(): void {
    // تعيين نوع المحاضرة
    this.newLecture.type = this.lectureType;
    
    // إرسال البيانات
    this.save.emit(this.newLecture as Lecture);
    this.closeModal();
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.newLecture.file = file;
      this.newLecture.fileUrl = file.name;
    }
  }

  private resetForm(): void {
    this.newLecture = {
      titleAr: '',
      titleEn: '',
      type: 'text',
      videoType: 'file',
      testType: 'electronic',
      hasDeadline: 'false'
    };
  }
}