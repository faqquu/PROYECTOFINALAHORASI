import { Component, NgModule, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { DeseadosService } from '../../servicios/deseados.service';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../modelos/producto.models';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ofertas',
  standalone: true,         
  imports: [RouterModule, FormsModule],
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})

export class OfertasComponent implements OnInit{
  productos: Producto[] = [];
  productosEnOferta: Producto[] = [];

  searchTerm: string = '';
  selectedCategory: string = '';
  selectedBrand = '';
  minprecio: number | null = null;
  maxprecio: number | null = null;

  constructor(private carritoService: CarritoService, private deseadosService: DeseadosService, private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productos = this.productoService.getAll();
    this.productosEnOferta = this.productos.filter(p => p.oferta === true);
  }

  get categories(): string[] {
    return [...new Set(this.productosEnOferta.map(p => p.categoria))];
  }

  get marcas(): string[] {
    return [...new Set(this.productosEnOferta.map(p => p.marca))];
  }

  get filteredProducts(): Producto[] {
  return this.productosEnOferta.filter(p => {
    const precioFiltrar = p.precioDescuento ?? p.precio;
    return (this.searchTerm === '' || p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
           (this.selectedCategory === '' || p.categoria === this.selectedCategory) &&
           (this.selectedBrand === '' || p.marca === this.selectedBrand) &&
           (this.minprecio === null || precioFiltrar >= this.minprecio) &&
           (this.maxprecio === null || precioFiltrar <= this.maxprecio);
    });
  }


  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedBrand = '';
    this.minprecio = null;
    this.maxprecio = null;
  }

  agregarC(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito');
  }

  agregarD(producto: Producto) {
    this.deseadosService.agregarADeseados(producto);
    alert('Producto agregado a deseados');
  }

  OnSearch(event: Event): void {
    event.preventDefault();
  }
}
