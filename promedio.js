const lista1 = [
    100,
    200,
    300,
    500
];

function calcularMediaAritmetica(lista) {
    //let sumaLista=0;
    //for (let element of lista) {
    //    sumaLista = sumaLista + element;
    //}

    const sumaLista = lista.reduce(
        function(nuevoElemento, valorAcumulado=0){
            return valorAcumulado + nuevoElemento;
        }
    );
    return sumaLista / lista.length
}