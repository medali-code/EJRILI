import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CammionadminComponent } from './cammionadmin.component';

describe('CammionadminComponent', () => {
  let component: CammionadminComponent;
  let fixture: ComponentFixture<CammionadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CammionadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CammionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
