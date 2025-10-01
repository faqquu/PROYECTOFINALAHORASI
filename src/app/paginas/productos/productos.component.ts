import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';
import { Producto } from '../../modelos/producto.models';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';
import { DeseadosService } from '../../servicios/deseados.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']  // ojo: era "styleUrl", debe ser "styleUrls"
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  
  filteredProducts: Producto[] = [];

  categories: string[] = [];
  marcas: string[] = [];

  searchTerm: string = '';
  selectedCategory: string = '';
  selectedBrand: string = '';
  minprecio: number | null = null;
  maxprecio: number | null = null;

  constructor(private productoService: ProductoService, private carritoService: CarritoService, private deseadosService: DeseadosService) {}

  ngOnInit(): void {
    this.productos = this.productoService.getAll();
    this.categories = this.productoService.getCategories(); // debes tener esto en tu servicio
    this.marcas = this.productoService.getMarcas();         // idem
    this.filtrarProductos(); // inicializa lista filtrada
  }

  getPrecioFinal(producto: Producto): number {
  return producto.oferta && producto.precioDescuento !== undefined
    ? producto.precioDescuento
    : producto.precio;
  }

  filtrarProductos(): void {
  this.filteredProducts = this.productos.filter(producto => {
    const precioFinal = this.getPrecioFinal(producto);

    const cumpleCategoria = this.selectedCategory ? producto.categoria === this.selectedCategory : true;
    const cumpleMarca = this.selectedBrand ? producto.marca === this.selectedBrand : true;
    const cumplePrecioMin = this.minprecio !== null ? precioFinal >= this.minprecio : true;
    const cumplePrecioMax = this.maxprecio !== null ? precioFinal <= this.maxprecio : true;

    return cumpleCategoria && cumpleMarca && cumplePrecioMin && cumplePrecioMax;
  });
}


  resetFilters(): void {
    this.selectedCategory = '';
    this.selectedBrand = '';
    this.minprecio = null;
    this.maxprecio = null;
    this.filtrarProductos();
  }

  agregarC(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); //Muestra el mensaje
  }

  agregarD(producto: Producto) {
    this.deseadosService.agregarADeseados(producto);
    alert('Producto agregado a deseados'); //Muestra el mensaje
  }
}
