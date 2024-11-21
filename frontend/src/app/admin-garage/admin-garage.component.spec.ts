import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGARAGEComponent } from './admin-garage.component';

describe('AdminGARAGEComponent', () => {
  let component: AdminGARAGEComponent;
  let fixture: ComponentFixture<AdminGARAGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGARAGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGARAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
