const lista2 = [
    1000000,
    100,
    700,
    200
];

function calcularMediana(listaOriginal){
    
    let lista = listaOriginal.sort(function(a,b){
        return a-b;
    });
    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        return calcularMediaAritmetica([elemento1, elemento2]);
    } else {
        return lista[mitadLista];
    }
}

function esPar(numero) {
    return numero % 2 === 0;
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (nuevoElemento, valorAcumulado = 0) {
            return valorAcumulado + nuevoElemento;
        }
    );
    return sumaLista / lista.length
}