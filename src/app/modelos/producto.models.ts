export interface Producto{
    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    precioDescuento?: number;
    imagen:string;
    disponibilidad:boolean;
    cantidad?:number;
    oferta?: boolean; 
    categoria:string;
    marca:string;
}