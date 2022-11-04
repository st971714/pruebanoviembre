import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-flexbox',
  templateUrl: './contenedor-flexbox.component.html',
  styleUrls: ['./contenedor-flexbox.component.scss']
})
export class ContenedorFlexboxComponent implements OnInit {
  imgPrincipal='../../../assets/reunion-socios-juntafreepik1.jpg.webp';
  imgUser='../../../assets/userprof.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
