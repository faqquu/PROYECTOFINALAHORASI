import { Component, NgModule } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { DeseadosComponent } from '../deseados/deseados.component';
import { CarritoService } from '../../servicios/carrito.service';
import { DeseadosService } from '../../servicios/deseados.service';
import { Producto } from '../../modelos/producto.models';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  imports: [RouterModule, FormsModule],
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
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Dahlia Garnet'
    },

    {
      id: 2,
      nombre: 'Girasoles',
      descripcion: 'Ramo',
      precio: 20,
      imagen: './asset/Productos/girasoles.jpeg',
      disponibilidad: true,
      categoria: 'Anual',
      marca: 'Delphinium Trick Lavender'
    },
  
    {
      id: 3,
      nombre: 'Hortensias',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/horte.webp',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Lirios'
    },
    {
      id: 4,
      nombre: 'Lilas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/lilas.jpg',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Dahlia Garnet'
    },
    {
      id: 5,
      nombre: 'Lirios',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/lirios.jpg',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Delphinium Trick Lavender'
    },
    {
      id: 6,
      nombre: 'Orquideas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/orquidea.jpeg',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Lirios'
    },
    {
      id: 7,
      nombre: 'Rosas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/rosas.jpg',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Dahlia Garnet'
    },
    {
      id: 8,
      nombre: 'Tulipan',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/tulipan.jpg',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Delphinium Trick Lavender'
    },
    {
      id: 9,
      nombre: 'Amapolas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/amapola.jpg',
      disponibilidad: true,
      categoria: 'Anual',
      marca: 'Lirios'
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

searchTerm: string = '';
selectedCategory:string ='';
selectedBrand = '';
minprecio:number | null = null;
maxprecio:number | null = null;

get categories() : string[]{
  return [...new Set(this.Productos.map(p => p.categoria))]
}
get Marca() : string[]{
    return[...new Set(this.Productos.map(p => p.marca))]
}

OnSearch(event:Event) : void{
  event.preventDefault();
}

resetFilters(): void{
  this.searchTerm = '';
  this.selectedCategory = '';
  this.selectedBrand = '';
  this.minprecio = null;
  this.maxprecio = null;
  this.Productos = [...this.Productos];
}

get filteredProducts(): Producto[]{
  return this.Productos.filter(p=>
    (this.searchTerm == '' || p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
    (this.selectedCategory === '' || p.categoria == this.selectedCategory) &&
    (this.selectedBrand == '' || p.marca == this.selectedBrand) &&
    (this.minprecio == null || p.precio >= this.minprecio) &&
    (this.maxprecio == null || p.precio <= this.maxprecio)
  )
}
}

