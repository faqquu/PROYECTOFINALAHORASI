export interface Oferta{
    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    precioan: number;
    imagen:string;
    disponibilidad:boolean;
    cantidad?:number;
}