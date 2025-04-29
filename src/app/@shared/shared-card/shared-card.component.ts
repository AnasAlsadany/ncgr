import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shared-card',
  imports: [CommonModule,FormsModule],
  templateUrl: './shared-card.component.html',
  styleUrl: './shared-card.component.scss'
})
export class SharedCardComponent {
  @Input() title: string = '';
  @Input() creator: string = '';
  @Input() createdDate: string = '';
  @Input() approver: string = '';
  @Input() approvedDate: string = '';
  @Input() category: string = '';
  @Input() participants: number = 0;
  @Input() rating: string = '';
  @Input() tags: string[] = [];
  @Input() postType: string = '';
  @Input() postDate: string = '';
  @Input() statusOptions: string[] = [];
  selectedStatus: string = '';
}
