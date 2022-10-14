import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewdeviceComponent } from './add-newdevice.component';

describe('AddNewdeviceComponent', () => {
  let component: AddNewdeviceComponent;
  let fixture: ComponentFixture<AddNewdeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewdeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewdeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
