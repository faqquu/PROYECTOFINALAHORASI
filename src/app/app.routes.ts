import { Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { DeseadosComponent } from './paginas/deseados/deseados.component';

export const routes: Routes = [
    {path: '', redirectTo : '/inicio', pathMatch: 'full'},
    {path: 'inicio', component:InicioComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'productos', component:ProductosComponent},
    {path: 'ofertas', component:OfertasComponent},
    {path: 'carrito', component:CarritoComponent},
    {path: 'quienessomos', component:QuienessomosComponent},
    {path: 'deseados', component:DeseadosComponent}
];
