
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
      nombre: 'perro',
      descripcion: 'perro',
      precio: 10,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },

    {
      id: 2,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 20,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },
  
    {
      id: 3,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 30,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 30,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 30,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 30,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 30,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 30,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },
    {
      id: 9,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 30,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },
    {
      id: 10,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 30,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },
    {
      id: 11,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 30,
      imagen: './asset/dog-dance.gif',
      disponibilidad: true
    },
    {
      id: 12,
      nombre: 'perro',
      descripcion: 'perro',
      precio: 30,
      imagen: './asset/dog-dance.gif',
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
