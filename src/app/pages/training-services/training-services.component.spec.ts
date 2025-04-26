import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingServicesComponent } from './training-services.component';

describe('TrainingServicesComponent', () => {
  let component: TrainingServicesComponent;
  let fixture: ComponentFixture<TrainingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
