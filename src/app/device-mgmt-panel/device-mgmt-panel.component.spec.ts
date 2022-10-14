import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMgmtPanelComponent } from './device-mgmt-panel.component';

describe('DeviceMgmtPanelComponent', () => {
  let component: DeviceMgmtPanelComponent;
  let fixture: ComponentFixture<DeviceMgmtPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceMgmtPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMgmtPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
