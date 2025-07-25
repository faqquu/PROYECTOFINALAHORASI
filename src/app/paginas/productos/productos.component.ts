
import { Component, NgModule } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { DeseadosComponent } from '../deseados/deseados.component';
import { CarritoService } from '../../servicios/carrito.service';
import { DeseadosService } from '../../servicios/deseados.service';
import { Producto } from '../../modelos/producto.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent {
  Productos: Producto[] = [

    {
      id: 1,
      nombre: 'Cerezos',
      descripcion: 'Ramo',
      precio: 10,
      imagen: './asset/Productos/cerezos.webp',
      disponibilidad: true
    },

    {
      id: 2,
      nombre: 'Girasoles',
      descripcion: 'Ramo',
      precio: 20,
      imagen: './asset/Productos/girasoles.jpeg',
      disponibilidad: true
    },
  
    {
      id: 3,
      nombre: 'Hortensias',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/horte.webp',
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Lilas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/lilas.jpg',
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Lirios',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/lirios.jpg',
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Orquideas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/orquidea.jpeg',
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'Rosas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/rosas.jpg',
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Tulipan',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/tulipan.jpg',
      disponibilidad: true
    },
    {
      id: 9,
      nombre: 'Amapolas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/amapola.jpg',
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
