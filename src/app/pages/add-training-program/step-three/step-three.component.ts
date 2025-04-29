import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss',
})
export class StepThreeComponent {
  @Input() formGroup!: FormGroup;
  isCostFree: boolean = true;

  languages = [
    { id: 'arabic', name: 'العربية' },
    { id: 'english', name: 'الإنجليزية' },
    { id: 'both', name: 'العربية والإنجليزية' },
  ];

  onProgramTypeChange(isPrivate: boolean) {
    this.isCostFree = isPrivate;
  }
}
