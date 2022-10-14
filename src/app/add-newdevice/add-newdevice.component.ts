import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Device } from '../device.model';

@Component({
  selector: 'app-add-newdevice',
  templateUrl: './add-newdevice.component.html',
  styleUrls: ['./add-newdevice.component.css']
})
export class AddNewdeviceComponent implements OnInit {

  id:string="";
  name:string="";
  location:string=""

  @Output()
   onNewDeviceEvent=new EventEmitter<Device>();

  constructor() { }

  ngOnInit(): void {
  }
  addNewDevice(){
    console.log(this.id,this,name,this.location);
    this.onNewDeviceEvent.emit({Id:this.id,Name:this.name,Location:this.location});
    
  }

}
