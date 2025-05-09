import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lecture, Section } from '../../models/section.model';
import { DeleteSectionModalComponent } from "./component/delete-section-modal/delete-section-modal.component";
import { AddLectureModalComponent } from "./component/add-lecture-modal/add-lecture-modal.component";
import { EditSectionModalComponent } from "./component/edit-section-modal/edit-section-modal.component";
import { DeleteLectureModalComponent } from "./component/delete-lecture-modal/delete-lecture-modal.component";
import { EditLectureModalComponent } from "./component/edit-lecture-modal/edit-lecture-modal.component";
import { AddTextModalComponent } from "./component/add-text-modal/add-text-modal.component";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-course-accordion',
  imports: [CommonModule, DeleteSectionModalComponent, AddLectureModalComponent, EditSectionModalComponent, DeleteLectureModalComponent, EditLectureModalComponent, AddTextModalComponent,DragDropModule],
  templateUrl: './course-accordion.component.html',
  styleUrl: './course-accordion.component.scss'
})
export class CourseAccordionComponent {
  sections: Section[] = [];
  activeSectionId?: number;
    showEditModal = false;
  showDeleteModal = false;
  showAddLectureModal = false;
  selectedSection?: Section;
  selectedLectureType?: any;

  constructor(private mockDataService: MockDataService) {
    this.sections = this.mockDataService.getSections();
  }

  toggleSection(sectionId: number): void {
    this.activeSectionId = this.activeSectionId === sectionId ? undefined : sectionId;
  }

  openEditModal(section: Section): void {
    this.selectedSection = { ...section };
    this.showEditModal = true;
  }

  onSaveSection(updatedSection: Section): void {
    const index = this.sections.findIndex(s => s.id === updatedSection.id);
    if (index !== -1) {
      this.sections[index] = updatedSection;
    }
    this.showEditModal = false;
  }

  openDeleteModal(section: Section): void {
    this.selectedSection = section;
    this.showDeleteModal = true;
  }

  onConfirmDelete(): void {
    if (this.selectedSection) {
      this.sections = this.sections.filter(s => s.id !== this.selectedSection!.id);
    }
    this.showDeleteModal = false;
  }

  openAddLectureModal(section: Section, type: string): void {
    this.selectedSection = section;
    this.selectedLectureType = type;
    this.showAddLectureModal = true;
  }

  onAddLecture(newLecture: Lecture): void {
    if (this.selectedSection) {
      newLecture.id = Math.max(...this.selectedSection.lectures.map(l => l.id), 0) + 1;
      this.selectedSection.lectures.push(newLecture);
      this.showAddLectureModal = false;
    }
  }

  getLectureIcon(type: string): string {
    switch(type) {
      case 'text': return 'acc_icon_41.svg';
      case 'video': return 'acc_icon_40.svg';
      case 'pdf': return 'acc_icon_42.svg';
      case 'audio': return 'acc_icon_43.svg';
      case 'image': return 'acc_icon_44.svg';
      case 'test': return 'acc_icon_45.svg';
      default: return '';
    }
  }
  showAddTextModal = false;
  showEditLectureModal = false;
  showDeleteLectureModal = false;
  selectedLecture: Lecture | null = null;

openAddTextModal(lecture: Lecture): void {
  this.selectedLecture = lecture;
  this.selectedLectureType = 'text';
  this.showAddTextModal = true;
}

openEditLectureModal(lecture: Lecture): void {
  this.selectedLecture = { ...lecture };
  this.showEditLectureModal = true;
}

openDeleteLectureModal(lecture: Lecture): void {
  this.selectedLecture = lecture;
  this.showDeleteLectureModal = true;
}

onSaveLectureText(newText: string): void {
  if (this.selectedLecture) {
    this.selectedLecture.content = newText;
    this.showAddTextModal = false;
  }
}

onEditLecture(updatedLecture: Lecture): void {
  const sectionIndex = this.sections.findIndex(s => 
    s.lectures.some(l => l.id === updatedLecture.id));
  
  if (sectionIndex !== -1) {
    const lectureIndex = this.sections[sectionIndex].lectures
      .findIndex(l => l.id === updatedLecture.id);
    
    if (lectureIndex !== -1) {
      this.sections[sectionIndex].lectures[lectureIndex] = updatedLecture;
    }
  }
  this.showEditLectureModal = false;
}

onDeleteLecture(): void {
  if (this.selectedLecture) {
    this.sections.forEach(section => {
      section.lectures = section.lectures.filter(l => l.id !== this.selectedLecture!.id);
    });
    this.showDeleteLectureModal = false;
  }
}

dropLecture(event: CdkDragDrop<Lecture[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    event.container.data.forEach((lecture, index) => {
      lecture.order = index + 1;
    });
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    event.previousContainer.data.forEach((lecture, index) => {
      lecture.order = index + 1;
    });
    event.container.data.forEach((lecture, index) => {
      lecture.order = index + 1;
    });
  }
}

dropSection(event: CdkDragDrop<Section[]>) {
  moveItemInArray(
    this.sections,
    event.previousIndex,
    event.currentIndex
  );
  this.sections.forEach((section, index) => {
    section.order = index + 1;
  });
}
}


