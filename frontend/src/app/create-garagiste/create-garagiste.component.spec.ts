import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGaragisteComponent } from './create-garagiste.component';

describe('CreateGaragisteComponent', () => {
  let component: CreateGaragisteComponent;
  let fixture: ComponentFixture<CreateGaragisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGaragisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGaragisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
