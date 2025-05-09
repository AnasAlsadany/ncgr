import { Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutAcademyComponent } from './pages/about-academy/about-academy.component';
import { TrainingProgramsComponent } from './pages/training-programs/training-programs.component';
import { CreateTrainingServicesComponent } from './pages/create-training-services/create-training-services.component';
import { DashboardComponent } from './layout/dashboard-layout/compnents/pages/pages/dashboard/dashboard.component';
import { FormsComponent } from './layout/dashboard-layout/compnents/pages/pages/forms/forms.component';
import { HelpComponent } from './layout/dashboard-layout/compnents/pages/pages/help/help.component';
import { ProfileComponent } from './layout/dashboard-layout/compnents/pages/pages/profile/profile.component';
import { SettingsComponent } from './layout/dashboard-layout/compnents/pages/pages/settings/settings.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { AddTrainingProgramComponent } from './pages/add-training-program/add-training-program.component';
import { TrainingProgramDetailsComponent } from './pages/training-program-details/training-program-details.component';
import { TrainingContentComponent } from './pages/training-content/training-content.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'help', component: HelpComponent },
      { path: 'aboutacademy', component: AboutAcademyComponent },
      { path: 'training-services', component: TrainingProgramsComponent },
      { path: 'createTrainingServices', component: CreateTrainingServicesComponent },
      { path: 'add-training-program', component: AddTrainingProgramComponent },
      { path: 'training-program-details', component: TrainingProgramDetailsComponent },
      { path: 'training-content', component: TrainingContentComponent },
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
