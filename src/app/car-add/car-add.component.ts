import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    // formulario valido
    // envio de formulario a la API
    // si esta OK
    this.router.navigate(['listar-auto']);
  }

}
