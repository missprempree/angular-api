import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-api-component',
  imports: [FormsModule, CommonModule, PaginationComponent],
  templateUrl: './post-api-component.component.html',
  styleUrl: './post-api-component.component.css'
})

export class PostApiComponentComponent {

  /*
  constructor(private http: HttpClient){
  }*/
  carList: any [] = [];
  /***  Pagination  ***/ 
  paginatedCarList: any[] = []; // Cars for the current page
  currentPage: number = 1; // Current page number
  pageSize: number = 5; // Number of users per page
  totalPages: number = 0; // Total number of pages
  pages: number[] = []; // Array of page numbers

  // Binding the following objects to Input Form
  carObj: any = {
      "carId": 0,
      "brand": '',
      "model": '',
      "year": 0,
      "color": '',
      "dailyRate": 0,
      "carImage": '',
      "regNo": ''
  }

  http = inject(HttpClient);
  getAllCars(){
    this.http.get("api/api/CarRentalApp/GetCars").subscribe((result: any)=>{
        this.carList = result.data;
    })

  }

   /***  Pagination  ***/ 
  getPaginationCars() {
    this.http.get("api/api/CarRentalApp/GetCars").subscribe((result: any) => {
      this.carList = result.data;
      this.totalPages = Math.ceil(this.carList.length / this.pageSize);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.updatePagination();
    });
  }

  onSave() {
    this.http.post("api/api/CarRentalApp/CreateNewCar",this.carObj).subscribe((resultObj: any)=>{
      if (resultObj.result) {
          alert("Car has been added successfully!")
          this.resetForm()
          // this.getAllCars()
          this.getPaginationCars()
      } else {
          alert(resultObj.message)
      }
    })
  }

  resetForm() {
    this.carObj = {
      carId: 0,
      regNo: '',
      brand: '',
      model: '',
      year: 0,
      color: '',
      dailyRate: 0,
    };
  }

  onEdit(data: any) {
    this.carObj = data;
  }

  onUpdate() {
    this.http.put("api/api/CarRentalApp/UpdateCar", this.carObj).subscribe((resultObj: any)=>{
      if (resultObj.result) {
          alert("Car has been updated successfully!")
          this.resetForm()
          // this.getAllCars()
          this.getPaginationCars()
      }else{
          alert(resultObj.message)
      }
    })
  }



   onDelete(id: number) {
    const isDelete = confirm("Are you sure wanting to Delete?");
    if(isDelete){
        this.http.delete("api/api/CarRentalApp/DeleteCarbyCarId?carid="+id).subscribe((resultObj: any)=>{
        if (resultObj.result) {
            alert("Car has been deleted successfully!")
            this.resetForm()
            // this.getAllCars()
            this.getPaginationCars()
        } else {
            alert(resultObj.message)
        }
      })

    }
    
  }
   /*** Pagination ***/
  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedCarList = this.carList.slice(start, end);
  }

   /*** Pagination ***/
  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }
 
  
}
