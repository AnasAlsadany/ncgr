import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReportCardData, ReportService } from './services/report.service';
import { SharedCardComponent } from "../../../../../../@shared/shared-card/shared-card.component";

interface SidebarItem {
  label: string;
  icon: string;
  route?: string;
  children?: { label: string; route: string }[];
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SharedCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  postType = 'منشور';
  postDate = '2025/01/20';
  statusOptions = ['مغلق', 'موقوف'];
  selectedStatus: string = '';
  sidebarItems: SidebarItem[] = [
    { label: 'المسارات التدريبية', icon: '01.svg', route: '/training-paths' },
    { label: 'البرامج التدريبية', icon: '02.svg', route: '/training-programs' },
    { label: 'الورش التدريبية', icon: '03.svg', route: '/workshops' },
    { label: 'البرامج العامة', icon: '04.svg', route: '/public-programs' },
    { label: 'التقييمات', icon: '05.svg', route: '/evaluations' },
    { label: 'الشهادات', icon: '06.svg', route: '/certificates' },
    { label: 'الوسوم', icon: '07.svg', route: '/tags' },
    { label: 'مركز الوسائط', icon: '08.svg', route: '/media-center' },
    { label: 'التقارير', icon: '09.svg', route: '/reports' },
    { label: 'قائمة المستخدمين', icon: '10.svg', route: '/users' },
    {
      label: 'ادارة صفحات المحتوي',
      icon: '11.svg',
      children: [
        { label: 'عن المنصة', route: '/about' },
        { label: 'القسم الترحيبي', route: '/welcome' },
        { label: 'الأخبار', route: '/news' },
        { label: 'القسم الرئيسي', route: '/main-section' },
        { label: 'الإحصائيات', route: '/stats' },
        { label: 'الجهات الأكثر تفاعلًا', route: '/top-agencies' }
      ]
    }
  ];

  reports: ReportCardData[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.reportService.getReportCards().subscribe(data => {
      this.reports = data;
    });
  }
}
