import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule, CommonModule, PaginationComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {


  customerList: any [] = [];
  // Binding the following objects to Input Form
  customerObj: any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }

   /***  Pagination  ***/ 
   paginatedCustomerList: any[] = []; // Customers for the current page
   currentPage: number = 1; // Current page number
   pageSize: number = 10; // Number of users per page
   totalPages: number = 0; // Total number of pages
   pages: number[] = []; // Array of page numbers

    
  constructor(private customerServ:CustomerService){
    this.getCustomers(); 
  }

  getCustomers() {
    this.customerServ.loadCustomers().subscribe((resultObj: any)=>{
      this.customerList = resultObj.data;
    })
  }

   /***  Pagination  ***/ 
   getPaginationCustomer() {
    this.customerServ.loadCustomers().subscribe((resultObj: any) => {
      this.customerList = resultObj.data;
      this.totalPages = Math.ceil(this.customerList.length / this.pageSize);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.updatePagination();
    });
  }

  /*
  constructor(private http:HttpClient){
    this.getCustomers(); 
  }

  getCustomers(){
    this.http.get("api/api/CarRentalApp/GetCustomers").subscribe((result: any)=>{
        this.customerList = result.data;
    })
  }

  getPaginationCustomer() {
    this.http.get("api/api/CarRentalApp/GetCustomers").subscribe((result: any) => {
      this.customerList = result.data;
      this.totalPages = Math.ceil(this.customerList.length / this.pageSize);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.updatePagination();
    });
  } */

    /*** Pagination ***/
    updatePagination(): void {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.paginatedCustomerList = this.customerList.slice(start, end);
    }
  
     /*** Pagination ***/
    onPageChange(page: number): void {
      this.currentPage = page;
      this.updatePagination();
    }

    onSave() {
      this.customerServ.createCustomer(this.customerObj).subscribe((resultObj: any)=>{
        if(resultObj.result){
          alert('Customer has been created successful');
          this.getPaginationCustomer();
        } else {
          alert(resultObj.message);
        }
      })
    }

    onDelete(arg0: any) {
      throw new Error('Method not implemented.');
    }

    onEdit(_t24: any) {
      throw new Error('Method not implemented.');
    }

    onUpdate() {
      throw new Error('Method not implemented.');
    }

    

    resetForm() {
      throw new Error('Method not implemented.');
    }
}
