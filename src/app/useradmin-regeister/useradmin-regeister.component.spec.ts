import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseradminRegeisterComponent } from './useradmin-regeister.component';

describe('UseradminRegeisterComponent', () => {
  let component: UseradminRegeisterComponent;
  let fixture: ComponentFixture<UseradminRegeisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseradminRegeisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseradminRegeisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
