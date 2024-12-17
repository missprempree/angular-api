import { Component } from '@angular/core';
import { Router } from '@angular/router';

// v.19 all the components are stand-alone by default
@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {

  constructor(private router : Router){
    console.log("test")
  }
  
  navigateToDataBind() {
    this.router.navigateByUrl("/dataBinding")
  }
}



