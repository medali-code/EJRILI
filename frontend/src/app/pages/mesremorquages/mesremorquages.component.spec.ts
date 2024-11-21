import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesremorquagesComponent } from './mesremorquages.component';

describe('MesremorquagesComponent', () => {
  let component: MesremorquagesComponent;
  let fixture: ComponentFixture<MesremorquagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesremorquagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesremorquagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
