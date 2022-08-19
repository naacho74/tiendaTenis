let arreglo = [
    {nombre:'juan'},{nombre:'lina'},{nombre:'lina'}
]

arreglo.forEach(function(elemento,indice){
if(elemento.nombre=='lina'){
    console.log('el indice es '+ indice)
    arreglo.splice(indice)
}


})
console.log(arreglo)