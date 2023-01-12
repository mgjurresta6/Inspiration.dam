import { Component } from '@angular/core';
import { FotoService } from 'src/app/services/foto.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget ;
}


@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent {
  photoSelected: String | ArrayBuffer | undefined;
  file!: File;

  constructor(private fotoService: FotoService){

  }


  onfotoSelecionada(event: any  ): void {
    if (event?.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
    //Imagen Previa a la Vista
    const reader = new FileReader();
    reader.onload = e => this.photoSelected = reader.result as String;
    reader.readAsDataURL(this.file);
    }
  }

  enviarFoto(titulo: HTMLInputElement, Descripcion: HTMLTextAreaElement): boolean{
  this.fotoService.crearFoto(titulo.value, Descripcion.value, this.file);
  subscribe(res=> console.log(res), err => console.log (err))
  return false;
  }


}
function subscribe(arg0: (res: any) => void, arg1: (err: any) => void) {
  throw new Error('Function not implemented.');
}

