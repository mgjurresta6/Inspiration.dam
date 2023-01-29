import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registroURL = 'http://localhost:3000/api/usuario/';
  private loginURL = 'http://localhost:3000/api/auth/';

  constructor(private http: HttpClient) { }

  registroUsuario(usuario){
    return this.http.post<any>(this.registroURL, usuario)
  }

  loginUsuario(usuario){
    return this.http.post<any>(this.loginURL, usuario)
  }
}
