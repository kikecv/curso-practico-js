//Helpers or Utils
function esPar(numero) {
    return numero % 2 === 0;
}

function mediaAritmetica(lista) {

    const listaSuma = lista.reduce(function (valorAnterior, valorTotal = 0) {
        return valorTotal + valorAnterior;
    })
    return listaSuma / lista.length
}

//Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = lista[mitad - 1];
        const elemento2 = lista[mitad];
        return mediaAritmetica([elemento1, elemento2]);
    }
    else {
        return lista[mitad];
    }
}

//Mediana General
const salariosColombia = colombia.map(
    function (persona) {
        return persona.salary;
    }
)

const salariosColombiaSorted = salariosColombia.sort(
    function (a, b) {
        return a - b;
    }
)

const medianaGeneralColombia = medianaSalarios(salariosColombiaSorted);

//Mediana del top 10%
const spliceStart = (salariosColombiaSorted.length * 90) / 100;
const spliceCount = salariosColombiaSorted.length -spliceStart;

const salariosColombiaTop10 = salariosColombiaSorted.splice(spliceStart,spliceCount);

const medianaTop10Colombia = medianaSalarios(salariosColombiaTop10);

console.log({
    medianaGeneralColombia,
    medianaTop10Colombia,
});