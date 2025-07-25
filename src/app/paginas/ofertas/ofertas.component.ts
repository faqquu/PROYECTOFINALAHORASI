import { Component, NgModule } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { DeseadosComponent } from '../deseados/deseados.component';
import { CarritoService } from '../../servicios/carrito.service';
import { DeseadosService } from '../../servicios/deseados.service';
import { Producto } from '../../modelos/producto.models';
import { Oferta } from '../../modelos/oferta.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  imports: [RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  oferta: Oferta[] = [

    {
      id: 1,
      nombre: 'Cerezos',
      descripcion: 'Ramo',
      precioan: 5000,
      precio: 1000,
      imagen: './asset/Productos/cerezos.webp',
      disponibilidad: true
    },

    {
      id: 2,
      nombre: 'Girasoles',
      descripcion: 'Ramo',
      precioan: 5000,
      precio: 2000,
      imagen: './asset/Productos/girasoles.jpeg',
      disponibilidad: true
    },
  
    {
      id: 3,
     nombre: 'Hortensias',
      descripcion: 'Ramo',
      precioan: 5000,
      precio: 3000,
      imagen: './asset/Productos/horte.webp',
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Lilas',
      descripcion: 'Ramo',
      precioan: 5000,
      precio: 3000,
      imagen: './asset/Productos/lilas.jpg',
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Lirios',
      descripcion: 'Ramo',
      precioan: 5000,
      precio: 3000,
      imagen: './asset/Productos/lirios.jpg',
      disponibilidad: true
    }

  ];

  productos = [];

  constructor(private carritoService: CarritoService, private deseadosService: DeseadosService) { }

  //metodo para agregar un producto al carrito

  agregarC(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); //Muestra el mensaje
  }
  agregarD(producto: Producto) {
    this.deseadosService.agregarADeseados(producto);
    alert('Producto agregado a deseados'); //Muestra el mensaje
  }
}
