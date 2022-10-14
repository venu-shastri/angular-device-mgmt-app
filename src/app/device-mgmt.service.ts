import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceMgmtService {

  constructor(private httpClient:HttpClient,@Inject("deviceApiAddress") private url:string){

  }

  getDevices():Observable<Array<Device>>{

   return this.httpClient.get<Device[]>(this.url);

  }
}
