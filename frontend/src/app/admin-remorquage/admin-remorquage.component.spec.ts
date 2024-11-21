import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminREMORQUAGEComponent } from './admin-remorquage.component';

describe('AdminREMORQUAGEComponent', () => {
  let component: AdminREMORQUAGEComponent;
  let fixture: ComponentFixture<AdminREMORQUAGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminREMORQUAGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminREMORQUAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
