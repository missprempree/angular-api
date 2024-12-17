import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Binding the following objects to Input Form
  userObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isTermsAgree: false
  }

  OnSave() {
    debugger;
    const formValue= this.userObj;
  }

}
