import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GARAGEComponent } from './garage.component';

describe('GARAGEComponent', () => {
  let component: GARAGEComponent;
  let fixture: ComponentFixture<GARAGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GARAGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GARAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
