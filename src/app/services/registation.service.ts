import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import {User} from '../models/user'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegistationService {

  constructor(private http:HttpClient) { }

  postUser(user:User){
   return  this.http.post(`http://localhost:3000/auth/register`,user)
  }
}
