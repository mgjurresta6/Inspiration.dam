import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Foto} from '../interfaces/foto';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  URI!: 'http://localhost:4200/fotos';

  constructor(private http:HttpClient) { }

  crearFoto(titulo: string, Descripcion: string, foto: File){
    const  fd = new FormData();
  fd.append('titulo', titulo);
  fd.append('Descripcion', Descripcion);
  fd.append('imagen', foto);
  return this.http.post(this.URI, fd);
  }

  getFotos(){
    return this.http.get<Foto[]>(this.URI);
  }

}
