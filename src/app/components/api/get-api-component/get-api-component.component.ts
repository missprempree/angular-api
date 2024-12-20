import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, resource } from '@angular/core';

@Component({
  selector: 'app-get-api-component',
  imports: [CommonModule],
  templateUrl: './get-api-component.component.html',
  styleUrl: './get-api-component.component.css'
})
export class GetApiComponentComponent implements OnInit {

  userList: any [] = [];
  prodList: any [] = []; // Array to hold dropdown data

  /** Pagination **/
  paginatedUserList: any[] = []; // Users for the current page
  currentPage: number = 1; // Current page number
  pageSize: number = 5; // Number of users per page
  totalPages: number = 0; // Total number of pages
  pages: number[] = []; // Array of page numbers

  
  constructor(private http: HttpClient){
  }

  // Fetch data from the API resource
  userDataList = resource({
    loader:() => {
      return fetch('https://jsonplaceholder.typicode.com/users').then(
        (result) => result.json() as Promise<any[]>)
    }
  })

  getUsers(){
      this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((resultUser:any) => {
         this.userList = resultUser
      })
  }

  getPaginationUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((resultUser:any) => {
      this.userList = resultUser;
      this.totalPages = Math.ceil(this.userList.length / this.pageSize);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.updatePagination();
    });
  }
  
  ngOnInit() {
    // Fetch data from the API
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((prodResult:any) =>{
        this.prodList = prodResult;
    });
  }

   /*** Pagination ***/
  updatePagination() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedUserList = this.userList.slice(start, end);
  }

   /*** Pagination ***/
  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagination();
  }
}
