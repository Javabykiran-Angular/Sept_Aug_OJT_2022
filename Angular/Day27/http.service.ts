import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl:string='http://localhost:8080/api/';
  constructor(private http:HttpClient) { }

  login(obj:any){
      return (this.http.post(`${this.baseUrl}login`,obj));
  }

  getRecord(){
      return (this.http.get(`${this.baseUrl}getallemployee`))
  }

  getParticularRecord(id:any){
        return (this.http.get(`${this.baseUrl}getemployeebyid/${id}`))
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallcountry`));
  }

  addRecord(obj:any){
      return (this.http.post(`${this.baseUrl}addemployee`,obj,{
        responseType:'text'
      }));
  }
  
  UpdateRecord(obj:any){
    return (this.http.put(`${this.baseUrl}updateemployee`,obj,{
      responseType:'text'
    }));
    
  }

}
