import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REMORQUAGEComponent } from './remorquage.component';

describe('REMORQUAGEComponent', () => {
  let component: REMORQUAGEComponent;
  let fixture: ComponentFixture<REMORQUAGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ REMORQUAGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(REMORQUAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
