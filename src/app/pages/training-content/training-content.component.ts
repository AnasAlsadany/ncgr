import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { AddlectureComponent } from '../addlecture/addlecture.component';

@Component({
  selector: 'app-training-content',
  imports: [CommonModule,SideBarComponent,AddlectureComponent,],
  templateUrl: './training-content.component.html',
  styleUrl: './training-content.component.scss'
})
export class TrainingContentComponent {

}
