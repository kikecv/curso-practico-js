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

//Mediana del top 10%

const porcentajeEvaluar = 10;

function calculaMediana10perMaxSalarios(porcentaje,lista) {

    const salarios = lista.map(
        function (persona) {
            return persona.salary;
        }
    )
    
    const salariosSorted = salarios.sort(
        function (a, b) {
            return a - b;
        }
    )

    const porcentajeDescartar = (100 - porcentaje);
    const spliceStart = parseInt((salariosSorted.length * porcentajeDescartar) / 100);
    const spliceCount = salariosSorted.length - spliceStart;

    const salariosColombiaTop10 = salariosSorted.splice(spliceStart, spliceCount);
    return medianaSalarios(salariosColombiaTop10);

}

function showTrabajadores(sueldos) {
    var listaT = sueldos.map(function (worker) {
        return '<br>' + 'Nombre: ' + worker.name + '| Sueldo: ' + worker.salary
    })
    document.getElementById("listaTrabajadores").innerHTML = listaT;
}

function addNewWorker() {
    const nombre = document.getElementById("InputNombre");
    const nombreV = nombre.value;
    const sueldo = document.getElementById("InputSueldo");
    const sueldoV = Number(sueldo.value);
    colombia.push({ name: nombreV, salary: sueldoV });
    showTrabajadores(colombia);
}

function onClickMediana10perMaxSalarios() {
    const mediana10pMaxSalarios = calculaMediana10perMaxSalarios(porcentajeEvaluar,colombia); 
    document.getElementById("resultado").innerText ="La Mediana del 10% de maximos salarios es: "+mediana10pMaxSalarios; 
}

showTrabajadores(colombia);

