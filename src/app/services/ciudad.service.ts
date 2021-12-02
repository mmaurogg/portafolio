import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private ciudades: Ciudad [] = []

  constructor() { }
}
