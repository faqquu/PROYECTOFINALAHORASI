import { Injectable } from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { DeseadosService } from '../servicios/deseados.service';
import { Producto } from '../modelos/producto.models';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  

  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Cerezos',
      descripcion: 'Ramo',
      precio: 10,
      imagen: './asset/Productos/cerezos.webp',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Dahlia Garnet',
      precioDescuento: 5,
      oferta: true
    },

    {
      id: 2,
      nombre: 'Girasoles',
      descripcion: 'Ramo',
      precio: 20,
      imagen: './asset/Productos/girasoles.jpeg',
      disponibilidad: true,
      categoria: 'Anual',
      marca: 'Delphinium Trick Lavender',
      precioDescuento: 10,
      oferta: true
    },
  
    {
      id: 3,
      nombre: 'Hortensias',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/horte.webp',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Lirios',
      precioDescuento: 5,
      oferta: true
    },
    {
      id: 4,
      nombre: 'Lilas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/lilas.jpg',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Dahlia Garnet',
      precioDescuento: 5,
      oferta: true
    },
    {
      id: 5,
      nombre: 'Lirios',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/lirios.jpg',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Delphinium Trick Lavender',
      oferta: false
    },
    {
      id: 6,
      nombre: 'Orquideas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/orquidea.jpeg',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Lirios',
      precioDescuento: 5,
      oferta: false
    },
    {
      id: 7,
      nombre: 'Rosas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/rosas.jpg',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Dahlia Garnet',
      precioDescuento: 0,
      oferta: false
    },
    {
      id: 8,
      nombre: 'Tulipan',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/tulipan.jpg',
      disponibilidad: true,
      categoria: 'Perenne',
      marca: 'Delphinium Trick Lavender',
      precioDescuento: 0,
      oferta: false
    },
    {
      id: 9,
      nombre: 'Amapolas',
      descripcion: 'Ramo',
      precio: 30,
      imagen: './asset/Productos/amapola.jpg',
      disponibilidad: true,
      categoria: 'Anual',
      marca: 'Lirios',
      precioDescuento: 0,
      oferta: false
    }
    
  ];
  
  
  getAll(): Producto[] {
    return this.Productos;
  }
  getProductos() {
    return this.Productos;
  }
  getCategories(): string[] {
  return this.categories;  // Esto funcionará porque hay getter llamado 'categories'
  }
  getMarcas(): string[] {
  return this.marcas;
}

  getPrecioFinal(producto: Producto): number {
  return producto.oferta && producto.precioDescuento !== undefined
    ? producto.precioDescuento
    : producto.precio;
  }

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
selectedCategory: string ='';
selectedBrand = '';
minprecio:number | null = null;
maxprecio:number | null = null;

get categories() : string[]{
  return [...new Set(this.Productos.map(p => p.categoria))]
}
get marcas(): string[] {
  return [...new Set(this.Productos.map(p => p.marca))];
}
get productosOferta(): number[] {
  return[...new Set(this.Productos .map(p => p.precioDescuento)    .filter((precio): precio is number => precio !== undefined))]
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
