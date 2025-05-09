import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-section-modal',
  templateUrl: './delete-section-modal.component.html',
  styleUrls: ['./delete-section-modal.component.scss']
})
export class DeleteSectionModalComponent {
  @Input() isOpen = false;
  @Input() sectionTitle = '';
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  onConfirm(): void {
    this.confirm.emit();
    this.closeModal();
  }
}