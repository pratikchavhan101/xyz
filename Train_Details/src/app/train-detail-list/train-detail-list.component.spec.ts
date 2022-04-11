import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainDetailListComponent } from './train-detail-list.component';

describe('TrainDetailListComponent', () => {
  let component: TrainDetailListComponent;
  let fixture: ComponentFixture<TrainDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
