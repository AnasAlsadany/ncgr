import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Section } from '../../../../models/section.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-section-modal',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-section-modal.component.html',
  styleUrls: ['./edit-section-modal.component.scss']
})
export class EditSectionModalComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() section?: Section;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Section>();

  editedSection!: Section;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['section'] && this.section) {
      this.editedSection = { ...this.section };
    }
  }

  onSave(): void {
    this.save.emit(this.editedSection);
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit();
  }
}
