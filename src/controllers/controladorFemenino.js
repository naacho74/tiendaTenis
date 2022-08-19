import {pintarProductos} from './pintarproductos.js'
import {productosBD} from '../helpers/basedatos.js'
import {buscarProductos} from './controlaorbuscar.js'
import { ampliarInfoProducto } from "./crearProductos.js";
let contadorDeProductos = sessionStorage.getItem('contadorProducto')
document.getElementById('numeroProducto').innerHTML = Number (contadorDeProductos)

let mujer=productosBD.filter(function(producto){
    return(producto.genero=='femenino')
})
pintarProductos(mujer)
buscarProductos(mujer)

let contenedor = document.getElementById("fila");
contenedor.addEventListener("click", function (evento) {
  let producto = ampliarInfoProducto(evento);
  console.log(producto)
    


//ALMACENAR EN EL LOCAL STORAGE EL PRODUCTO SELECCIONADO
    sessionStorage.setItem('infoProducto',JSON.stringify(producto))
// abro nueva ventana
 window.location.href='./ampliarinfo.html'

});