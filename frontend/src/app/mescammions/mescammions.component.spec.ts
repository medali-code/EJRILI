import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MescammionsComponent } from './mescammions.component';

describe('MescammionsComponent', () => {
  let component: MescammionsComponent;
  let fixture: ComponentFixture<MescammionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MescammionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MescammionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
