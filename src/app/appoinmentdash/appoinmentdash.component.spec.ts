import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentdashComponent } from './appoinmentdash.component';

describe('AppoinmentdashComponent', () => {
  let component: AppoinmentdashComponent;
  let fixture: ComponentFixture<AppoinmentdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppoinmentdashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppoinmentdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
