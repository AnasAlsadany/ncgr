import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReportCardData, ReportService } from './services/report.service';
import { SharedCardComponent } from "../../../../../../@shared/shared-card/shared-card.component";
import { SideBarComponent } from '../../../../../../pages/side-bar/side-bar.component';

interface SidebarItem {
  label: string;
  icon: string;
  route?: string;
  children?: { label: string; route: string }[];
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SharedCardComponent,SideBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  postType = 'منشور';
  postDate = '2025/01/20';
  statusOptions = ['مغلق', 'موقوف'];
  selectedStatus: string = '';

  reports: ReportCardData[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.reportService.getReportCards().subscribe(data => {
      this.reports = data;
    });
  }
}
