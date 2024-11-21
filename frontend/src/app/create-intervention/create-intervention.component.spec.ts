import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInterventionComponent } from './create-intervention.component';

describe('CreateInterventionComponent', () => {
  let component: CreateInterventionComponent;
  let fixture: ComponentFixture<CreateInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInterventionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
