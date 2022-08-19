
import { pintarProductos } from "./pintarproductos.js"
 export function buscarProductos(productos){

    let buscador=document.getElementById('busqueda')
    buscador.addEventListener('keyup',function(evento){
     let productoBuscado=evento.target.value
     let filtro=productos.filter(function(producto){
        return(producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase()))
    })

    pintarProductos(filtro)
    })
}

