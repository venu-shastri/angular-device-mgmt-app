import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeviceTableViewComponent } from './device-table-view/device-table-view.component';
import { AddNewdeviceComponent } from './add-newdevice/add-newdevice.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { DeviceMgmtPanelComponent } from './device-mgmt-panel/device-mgmt-panel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    DeviceTableViewComponent,
    AddNewdeviceComponent,
    EditDeviceComponent,
    DeviceMgmtPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
    
  ],
  providers: [{provide:"deviceApiAddress",useValue:"http://localhost:3200/devices"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
