import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTableViewComponent } from './device-table-view.component';

describe('DeviceTableViewComponent', () => {
  let component: DeviceTableViewComponent;
  let fixture: ComponentFixture<DeviceTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
