import { Component } from '@angular/core';
import { Course, COURSES } from '../constants/courses.constant';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-training-services',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './training-services.component.html',
  styleUrl: './training-services.component.scss'
})
export class TrainingServicesComponent {
  courses: Course[] = COURSES;
}
