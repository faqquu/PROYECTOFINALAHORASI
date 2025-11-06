import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private http = Inject(HttpClient);

  register(user: any) {
    return this.http.post('http://localhost/api_proyecto/public/users/register', user);
  }
  login(credentials: any) {
    return this.http.post('http://localhost/api_proyecto/public/users/login', credentials);
  }
  
}
