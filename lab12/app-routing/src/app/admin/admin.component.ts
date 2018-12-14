import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x) { 
    console.log('log called')
    console.log(x) 
   }

   onSubmit(f: NgForm) {
   
    console.log('onSubmit called...')
    console.log(`firstName: ${f.value.first}`);
    console.log(f.valid);
    console.log(f);
   }
}
