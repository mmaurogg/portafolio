import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup | any;

  constructor(private fb: FormBuilder,
              private validadores: ValidatorsService
    ) {

    this.crearFormulario();
    this.cargarDataAlFormulario();

  }

  ngOnInit(): void {
  }

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }

  get documentoNoValido() {
    return this.forma.get('documento').invalid && this.forma.get('documento').touched
  }

  get direccionNoValido() {
    return this.forma.get('ubicacion.direccion').invalid && this.forma.get('ubicacion.direccion').touched
  }

  get ciudadNoValido() {
    return this.forma.get('ubicacion.ciudad').invalid && this.forma.get('ubicacion.ciudad').touched
  }

  get telefonoNoValido() {
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched
  }

  get emailNoValido() {
    return this.forma.get('email').invalid && this.forma.get('email').touched
  }

  get contrasenaNoValido() {
    return this.forma.get('contrasena').invalid && this.forma.get('contrasena').touched
  }

  get contrasena2NoValido() {
    const contrasena = this.forma.get('contrasena').value;
    const contrasena2 = this.forma.get('contrasena2').value;

    return (contrasena === contrasena2 ) ? false : true;
    
    //this.forma.get('contrasena2').invalid && this.forma.get('contrasena2').touched
  }

  get tipoNoValido() {
    return this.forma.get('tipo').invalid && this.forma.get('tipo').touched
  }

  crearFormulario() {

    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      documento: ['', Validators.required],
      ubicacion: this.fb.group({
        direccion: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      contrasena2: ['', Validators.required],
      tipo: ['',],
      adjuntoRut: ['',],
    },{
      validators: this.validadores.contrasenaIguales('contrasena', 'contrasena2')
    });
  }

  cargarDataAlFormulario() {

    this.forma.reset({
      nombre: "pepe sagaz",
      documento: "1234567",
      ubicacion: {
        direccion: "11111",
        ciudad: "11111"
      },
      telefono: "11111",
      email: "pepesagaz@hotmail.com",
      contrasena: "",
      tipo: "",
      adjuntoRut: ""
    });
  }

  guardar() {
    console.log(this.forma);

    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control: any) => {

        if (control instanceof FormGroup) {
          return Object.values(control.controls).forEach((control: any) => control.markAsTouched());
        }

        control.markAsTouched();
      });

    }

  }


}
