import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChefferComponent } from './create-cheffer.component';

describe('CreateChefferComponent', () => {
  let component: CreateChefferComponent;
  let fixture: ComponentFixture<CreateChefferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChefferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChefferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
