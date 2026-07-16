import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Service } from '../Services/service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOption } from '@angular/material/select';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-events',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInput,MatButtonModule, MatSelectModule, MatDatepickerModule, MatOption, CommonModule],
  templateUrl: './add-events.html',
  styleUrl: './add-events.scss',
})
export class AddEvents implements OnInit{

  public formg !: FormGroup;

  isEdit : boolean = false;

  constructor(private fb : FormBuilder, private service : Service, private router : Router){

  }

  ngOnInit(): void {

    this.formg = this.fb.group({
      eventname : ["", [Validators.required]],
      description : ["", [Validators.required]],
      eventtype : ["", [Validators.required]],
      eventdate : [null, [Validators.required]],
      venue : ["", [Validators.required]],
      maxparticipants : ["", [Validators.required]],
      eventstatus : ["", [Validators.required]]
    })
    
    if(this.service.editEventData){
      this.isEdit = true;
      console.log(this.service.editEventData);
      this.formg.patchValue(this.service.editEventData);
    }

  }

  addEvents(){
    this.service.AddEvent(this.formg.value).subscribe({
      next : (response) => {
        alert(`${response.message}`);
        this.router.navigate(['/viewevents']);
      },
      error : (response) => {
        alert(`${response.error.message}`);
      }
    })
  }

  editEvents(){
    this.service.EditEvent(this.formg.value, this.service.editEventData._id).subscribe({
      next : (response) => {
        alert(`${response.message}`);
        this.service.editEventData = null;
        this.isEdit = false;
        this.router.navigate(['/viewevents']);
      },
      error : (response) => {
        alert(`${response.error.message}`);
      }
    })
  }
}

