import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "Jane"
  lastName: string = "Doe"
  employeeId: number = 10468076
  isActive: boolean = true
  currentDate: Date = new Date()
  textPlaceHolder: string = "Enter Employee ID"
  div1ClassName: string = "bg-primary"

  constructor() {
    console.log(this.firstName)
    console.log(this.lastName)
  }

  showWelcomeMessage(){
    alert("Welcome to Angular 19 Tutorial")
  }
}
