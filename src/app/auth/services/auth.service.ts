import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 
  }
  baseurl = "http://localhost:3000/clients"
  createUser(model:any) {
      return this.http.post(this.baseurl, model)
  }

  getAllUsers(){
    return this.http.get(this.baseurl);
  }

}
