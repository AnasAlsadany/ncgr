import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss',
})
export class StepTwoComponent {
  @Input() formGroup!: FormGroup;
  isProgramTypePrivate: boolean = true;

  languages = [
    { id: 'arabic', name: 'العربية' },
    { id: 'english', name: 'الإنجليزية' },
    { id: 'both', name: 'العربية والإنجليزية' },
  ];

  onProgramTypeChange(isPrivate: boolean) {
    this.isProgramTypePrivate = isPrivate;
  }
}
