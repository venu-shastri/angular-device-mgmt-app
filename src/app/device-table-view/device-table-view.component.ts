import { Component, OnInit,Input } from '@angular/core';
import { Device } from '../device.model';

@Component({
  selector: 'app-device-table-view',
  templateUrl: './device-table-view.component.html',
  styleUrls: ['./device-table-view.component.css']
})
export class DeviceTableViewComponent implements OnInit {

  @Input()
  devices=new Array<Device>();
  constructor() { }

  ngOnInit(): void {
  }

}
