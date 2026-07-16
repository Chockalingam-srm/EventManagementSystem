import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Service } from '../Services/service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-event',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './view-event.html',
  styleUrl: './view-event.scss',
})

export class ViewEvent implements OnInit{

  fullEventDataList : any[] = [];
  orderedEventDataList : any;

  constructor(private service : Service, private router : Router){
  }

  ngOnInit(): void {
    this.fetchFullEvents()
  }

  fetchFullEvents(){
    this.service.FullEvent().subscribe({
      next : (response) => {
        this.fullEventDataList = response.message;
        this.orderedEventDataList = response.message;
        console.log(response.message);
      },
      error : (response) => {
        alert(`${response.error.message}`);
      }
    })
  }

  deleteEvent(id:any){
    this.service.DeleteEvent(id).subscribe({
      next : (response) => {
        alert(`${response.message}`);
      },
      error : (response) => {
        alert(`${response.error.message}`);
      }
    })
  }

  editEvent(event:any){
    this.service.GetForEditEvent(event);
    this.router.navigate(['/addevents']);
  }

  navigate(){
    this.router.navigate(['/addevents']);
  }

  navigatee(){
    this.router.navigate(['/viewevents']);
  }

  ascOrder(){

    this.orderedEventDataList = [...this.fullEventDataList].sort((a,b) => {
      return new Date(a.eventdate).getTime() - new Date(b.eventdate).getTime();
    })
    console.log(this.orderedEventDataList);
  }

  descOrder(){
    this.orderedEventDataList = [...this.fullEventDataList].sort((a,b) => {
      return new Date(b.eventdate).getTime() - new Date(a.eventdate).getTime();
    })
    console.log(this.orderedEventDataList);
  }
}
