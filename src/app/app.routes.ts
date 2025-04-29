import { Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutAcademyComponent } from './pages/about-academy/about-academy.component';
import { TrainingServicesComponent } from './pages/training-services/training-services.component';
import { CreateTrainingServicesComponent } from './pages/create-training-services/create-training-services.component';
import { DashboardComponent } from './layout/dashboard-layout/compnents/pages/pages/dashboard/dashboard.component';
import { FormsComponent } from './layout/dashboard-layout/compnents/pages/pages/forms/forms.component';
import { HelpComponent } from './layout/dashboard-layout/compnents/pages/pages/help/help.component';
import { ProfileComponent } from './layout/dashboard-layout/compnents/pages/pages/profile/profile.component';
import { SettingsComponent } from './layout/dashboard-layout/compnents/pages/pages/settings/settings.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

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
      { path: 'aboutacademy', component: AboutAcademyComponent },
      { path: 'TrainingServices', component: TrainingServicesComponent },
      { path: 'createTrainingServices', component: CreateTrainingServicesComponent },
    ]
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
