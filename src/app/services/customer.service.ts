import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  

  apiUrl: string = "api/api/CarRentalApp/"
  constructor(private http: HttpClient) { }

  loadCustomers(){
    return this.http.get(this.apiUrl+"GetCustomers");
  }

  createCustomer(customerObj:any){
    return this.http.post(this.apiUrl + "CreateNewCustomer", customerObj);
  }

  updateCustomer(customerObj:any){
    return this.http.put(this.apiUrl + "UpdateCustomer", customerObj);
  }

  deleteCustomer(id: number) {
    return this.http.delete(this.apiUrl + "DeletCustomerById?id="+id);
  }
}
