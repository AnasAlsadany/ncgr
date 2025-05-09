
import { Component, importProvidersFrom, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr'; // Optional
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { AddlectureComponent } from './component/addlecture/addlecture.component';
import { CourseAccordionComponent } from "./component/course-accordion/course-accordion.component";
import { Section } from './models/section.model';
import { SectionsService } from './services/training-content-service';

@Component({
  selector: 'app-training-content',
  imports: [CommonModule, SideBarComponent, AddlectureComponent, ReactiveFormsModule, CourseAccordionComponent],
  templateUrl: './training-content.component.html',
  styleUrl: './training-content.component.scss'
})
export class TrainingContentComponent implements OnInit {
  sectionForm!: FormGroup;
  sections = signal<Section[]>([]);

  constructor(
    private fb: FormBuilder,
    private sectionService: SectionsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.sectionForm = this.fb.group({
      arabicTitle: ['', Validators.required],
      englishTitle: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.sectionForm.valid) {
      this.sectionService.addSection(this.sectionForm.value).subscribe(() => {
        this.toastr.success('تمت إضافة القسم بنجاح');
        this.sectionForm.reset();
        document.getElementById('closeModalBtn')?.click();
      });
    }
  }
}
