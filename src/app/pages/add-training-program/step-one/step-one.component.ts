import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss',
})
export class StepOneComponent {
  @Input() formGroup!: FormGroup;

  arabicImagePreview: string | null = null;
  englishImagePreview: string | null = null;

  onFileSelected(event: Event, isArabic: boolean) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      // Check file type
      if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        alert('يرجى اختيار ملف من نوع JPEG أو JPG أو PNG فقط');
        return;
      }

      // Check file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('حجم الملف يجب أن لا يتجاوز 5 ميجابايت');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (isArabic) {
          this.arabicImagePreview = e.target.result;
          this.formGroup.patchValue({
            arabicImage: file,
          });
        } else {
          this.englishImagePreview = e.target.result;
          this.formGroup.patchValue({
            englishImage: file,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(isArabic: boolean) {
    if (isArabic) {
      this.arabicImagePreview = null;
      this.formGroup.patchValue({
        arabicImage: null,
      });
      // Reset the file input
      const fileInput = document.getElementById(
        'arabicImage'
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } else {
      this.englishImagePreview = null;
      this.formGroup.patchValue({
        englishImage: null,
      });
      // Reset the file input
      const fileInput = document.getElementById(
        'englishImage'
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    }
  }
}
