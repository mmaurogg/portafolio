import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactoModel } from '../interfaces/contacto.model';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private url = "http://localhost:4040/api"
  
  constructor( private http: HttpClient ) { }

  crearContacto ( contacto: ContactoModel ) : Observable <ContactoModel>{

    console.log(contacto);
    return this.http.post<ContactoModel>(`${ this.url }/crearContacto`, contacto)
    .pipe(
      map( (resp: any) => {
        //contacto.id = resp.nombre;
        console.log(resp);
        return contacto;
      })
    );
  }

}
