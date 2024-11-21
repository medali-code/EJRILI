import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCamionComponent } from './create-camion.component';

describe('CreateCamionComponent', () => {
  let component: CreateCamionComponent;
  let fixture: ComponentFixture<CreateCamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCamionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
