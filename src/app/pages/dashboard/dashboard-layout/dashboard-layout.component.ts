import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../pages/pages/dashboard/footer/footer.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomepageComponent } from '../../homepage/homepage.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, NavbarComponent, FooterComponent,HomepageComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

}
