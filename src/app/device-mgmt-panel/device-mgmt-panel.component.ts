import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AddNewdeviceComponent } from '../add-newdevice/add-newdevice.component';
import { DeviceMgmtService } from '../device-mgmt.service';
import { Device } from '../device.model';

@Component({
  selector: 'app-device-mgmt-panel',
  templateUrl: './device-mgmt-panel.component.html',
  styleUrls: ['./device-mgmt-panel.component.css']
})
export class DeviceMgmtPanelComponent implements OnInit {

  deviceList=new Array<Device>();
  constructor(private deviceServiceRef:DeviceMgmtService) { }

   addNewDeviceHandler(data:any){
     this.deviceList.push(data);
   }

   
  ngOnInit(): void {
    // this.deviceList.push(     {Id:"D100",Name:"D1",Location:"p1"});
    // this.deviceList.push(     {Id:"D100",Name:"D1",Location:"p1"});
    // this.deviceList.push(     {Id:"D100",Name:"D1",Location:"p1"});
    // this.deviceList.push(     {Id:"D100",Name:"D1",Location:"p1"});
    // this.deviceList.push(     {Id:"D100",Name:"D1",Location:"p1"});
    this.deviceServiceRef.getDevices().subscribe(
      (deviceItems:Device[])=>{ console.log(deviceItems);this.deviceList= deviceItems;},
    (error)=>{ console.log(error)},
    ()=>{console.log("completed")});
    
       
  }

}
