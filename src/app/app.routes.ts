import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './pages/dashboard/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './pages/dashboard/pages/pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/dashboard/pages/pages/forms/forms.component';
import { HelpComponent } from './pages/dashboard/pages/pages/help/help.component';
import { ProfileComponent } from './pages/dashboard/pages/pages/profile/profile.component';
import { SettingsComponent } from './pages/dashboard/pages/pages/settings/settings.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: HomepageComponent }, 
      { path: 'dashboard', component: DashboardComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'help', component: HelpComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
