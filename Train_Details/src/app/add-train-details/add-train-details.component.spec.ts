import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainDetailsComponent } from './add-train-details.component';

describe('AddTrainDetailsComponent', () => {
  let component: AddTrainDetailsComponent;
  let fixture: ComponentFixture<AddTrainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
