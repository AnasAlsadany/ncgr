import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lecture } from '../../../../models/section.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-lecture-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-lecture-modal.component.html',
  styleUrls: ['./edit-lecture-modal.component.scss']
})
export class EditLectureModalComponent {
  @Input() isOpen = false;
  @Input() lecture: Lecture | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Lecture>();

  editedLecture: Lecture | null = null;

  ngOnChanges(): void {
    if (this.lecture) {
      this.editedLecture = { ...this.lecture };
    }
  }

  onSave(): void {
    if (this.editedLecture) {
      this.save.emit(this.editedLecture);
    }
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit();
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file && this.editedLecture) {
      this.editedLecture.fileUrl = file.name;
    }
  }
  getLectureTypeName(type?: string): string {
    switch(type) {
      case 'text': return 'نص';
      case 'video': return 'فيديو';
      case 'pdf': return 'وثيقة PDF';
      case 'audio': return 'ملف صوتي';
      case 'image': return 'صورة';
      case 'test': return 'اختبار';
      default: return 'محاضرة';
    }
  }
  
  // onFileChange(event: any): void {
  //   const file = event.target.files[0];
  //   if (file && this.editedLecture) {
  //     this.editedLecture.file = file;
  //     this.editedLecture.fileUrl = file.name;
  //   }
  // }
  
}