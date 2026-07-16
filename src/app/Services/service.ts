import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {

  editEventData !: any  ;

  constructor(private http : HttpClient){

  }

  Login(formData : any) : Observable<any>{
    console.log(formData);
    return this.http.post("http://localhost:4000/api/login", formData);
  }

  AddEvent(formData : any) : Observable<any>{
    console.log(formData);
    return this.http.post("http://localhost:4000/api/addEvents", formData);
  }

  FullEvent() : Observable<any>{
    return this.http.get("http://localhost:4000/api/getFullEvents");
  }

  DeleteEvent(id : any):Observable<any>{
    return this.http.post("http://localhost:4000/api/deleteEvent", {id : id});
  }

  GetForEditEvent(event : any){
    this.editEventData = event;
    console.log(event, this.editEventData);
  }

  EditEvent(formData:any, id:any):Observable<any>{
    console.log(formData, id);
    return this.http.post("http://localhost:4000/api/editEvent", {data : formData, id : id});
  }
}
