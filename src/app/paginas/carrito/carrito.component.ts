import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/producto.models';
import { CarritoService } from '../../servicios/carrito.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productoEnCarrito: { producto: Producto; cantidad: number;}[] = [];

  constructor(private carritoService: CarritoService, private router:Router) { };

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((productos) => {
      this.productoEnCarrito = productos
    })
  };

  agregarCantidad(index: number) {
    this.productoEnCarrito[index].cantidad++
  };

  quitarCantidad(index: number) {
    if (this.productoEnCarrito[index].cantidad > 1) {
      this.productoEnCarrito[index].cantidad--
    };
  }

  eliminarProducto(productoId: number) {
    this.carritoService.eliminarDelCarrito(productoId)
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito()
  }

  // realizarCompra(){
  //   alert("Compra Realizada Exitosamente");
  //   this.vaciarCarrito();
  // }

  irAFormularioCompra(){
    //Redirige al usuario a la ruta '/compra', donde se encuentra el formulario para finalizar la compra 
    this.router.navigate(['/compra'])
  }
  //calcular el total del carrito de compras
  calcularTotal(): number {
  return this.productoEnCarrito.reduce((total, item) => {
    const precio = item.producto.oferta && item.producto.precioDescuento != null
      ? item.producto.precioDescuento
      : item.producto.precio;

    return total + (precio * item.cantidad);
  }, 0);
}

}
