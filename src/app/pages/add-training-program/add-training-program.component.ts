import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-add-training-program',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    SearchFilterComponent,
    SideBarComponent,
  ],
  templateUrl: './add-training-program.component.html',
  styleUrl: './add-training-program.component.scss',
})
export class AddTrainingProgramComponent {
  currentStep = 1;
  trainingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.trainingForm = this.fb.group({
      // Step 1 - Basic Information
      programName: ['', Validators.required],
      programDescription: ['', Validators.required],
      programObjectives: ['', Validators.required],

      // English versions
      programNameEn: [''],
      programDescriptionEn: [''],
      programObjectivesEn: [''],

      // Step 2 - Target Audience
      targetAudience: ['', Validators.required],
      targetAudienceEn: [''],
      language: ['arabic', Validators.required],

      // Step 3 - Program Materials
      materials: ['', Validators.required],
      materialsEn: [''],
      isPaid: [false],
      price: [''],
      currency: ['SAR'],
    });
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitForm() {
    if (this.trainingForm.valid) {
      console.log('Form submitted:', this.trainingForm.value);
      // Add API call logic here
    } else {
      this.markFormGroupTouched(this.trainingForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}
