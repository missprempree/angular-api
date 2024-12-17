import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api-component',
  imports: [CommonModule],
  templateUrl: './get-api-component.component.html',
  styleUrl: './get-api-component.component.css'
})
export class GetApiComponentComponent implements OnInit {

  userList: any [] = [];
  prodList: any [] = []; // Array to hold dropdown data
  constructor(private http: HttpClient){
  }

  getUsers(){
      this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((resultUser:any) => {
         this.userList = resultUser
      })
  }


  
  ngOnInit() {
    // Fetch data from the API
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((prodResult:any) =>{
        this.prodList = prodResult;
    });
  }
}
