import { Component, NgModule } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { DeseadosService } from '../../servicios/deseados.service';
import { Producto } from '../../modelos/producto.models';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ofertas',
  imports: [RouterModule, FormsModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {

  Productos: Producto[] = [];
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
