import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinedasComponent } from './medicinedas.component';

describe('MedicinedasComponent', () => {
  let component: MedicinedasComponent;
  let fixture: ComponentFixture<MedicinedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicinedasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicinedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
