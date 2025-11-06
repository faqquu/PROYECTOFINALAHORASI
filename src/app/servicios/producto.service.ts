import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto.models';

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
}
