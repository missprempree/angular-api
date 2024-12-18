import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api-component',
  imports: [FormsModule],
  templateUrl: './post-api-component.component.html',
  styleUrl: './post-api-component.component.css'
})

export class PostApiComponentComponent {
  /*
  constructor(private http: HttpClient){
  }*/
  carList: any [] = []
  // Binding the following objects to Input Form
  carObj: any = {
      "CarId": 0,
      "Brand": '',
      "Model": '',
      "Year": 0,
      "Color": '',
      "DailyRate": 0,
      "CarImage": '',
      "RegNo": ''
  }

  http = inject(HttpClient);

  getAllCars(){
    this.http.get("api/api/CarRentalApp/GetCars").subscribe((result: any)=>{
        this.carList = result.data;
    })

  }

  onSave() {
    this.http.post("api/api/CarRentalApp/CreateNewCar",this.carObj).subscribe((resultObj: any)=>{
      if (resultObj.result) {
          this.resetForm();
          alert("Car has been added successfully!");
          this.getAllCars();
      } else {
          alert(resultObj.message)
      }
    })
  }

  resetForm() {
    this.carObj = {
      CarId: 0,
      RegNo: '',
      Brand: '',
      Model: '',
      Year: 0,
      Color: '',
      DailyRate: 0,
    };
  }


}
