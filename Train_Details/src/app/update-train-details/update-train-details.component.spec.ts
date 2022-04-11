import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainDetailsComponent } from './update-train-details.component';

describe('UpdateTrainDetailsComponent', () => {
  let component: UpdateTrainDetailsComponent;
  let fixture: ComponentFixture<UpdateTrainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrainDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
