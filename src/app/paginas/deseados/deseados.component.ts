import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Producto } from '../../modelos/producto.models';
import { DeseadosService } from '../../servicios/deseados.service';
import { ProductosComponent } from '../productos/productos.component';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  imports: [FormsModule, RouterModule],
  selector: 'app-deseados',
  templateUrl: './deseados.component.html',
  styleUrl: './deseados.component.css'
})
export class DeseadosComponent implements OnInit {
  productoEnDeseados: { producto: Producto; cantidad: number;}[] = [];

  constructor(private deseadosService: DeseadosService, private carritoService: CarritoService) { };



  ngOnInit(): void {
    this.deseadosService.deseados$.subscribe((productos) => {
      this.productoEnDeseados = productos
    })
  };

  agregarCantidad(index: number) {
    this.productoEnDeseados[index].cantidad++
  };

  quitarCantidad(index: number) {
    if (this.productoEnDeseados[index].cantidad > 1) {
      this.productoEnDeseados[index].cantidad--
    };
  }

  eliminarProducto(productoId: number) {
    this.deseadosService.eliminarDeDeseados(productoId)
  }

  vaciarDeseados() {
    this.deseadosService.vaciarDeseados()
  }

  realizarCompra(){
    alert("Compra Realizada Exitosamente");
    this.vaciarDeseados();
  }

  agregarC(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); //Muestra el mensaje
  }
}