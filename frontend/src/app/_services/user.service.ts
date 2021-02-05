import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {
  }

  postUser(user : User){
    const apiToCall = environment.apiUrl + "/add-user";
    this.http.post<any>(apiToCall, user);
  }

}