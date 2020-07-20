import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  getCustomer(id: number): Observable<Object> {


    return this.http.get(`${this.baseUrl}/usuario-detail/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/usuario-create/`, customer);


  }

  // tslint:disable-next-line:ban-types
  createRfid(rfid: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/rfid-create/`, rfid);
  }

  // tslint:disable-next-line:ban-types
  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/usuario-update/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/usuario-delete/${id}`);
  }

  deleteRfid(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/rfid-delete/${id}`);
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuario-list`);
  }

  getRfidList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rfid-list`);
  }

  getTemperaturasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/temp-list`);
  }

  getCustomersByAge(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuario-detail/${id}/`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`);
  }
}
