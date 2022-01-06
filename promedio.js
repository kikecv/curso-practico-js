const lista1 = [
    
];

const listaNumeros = document.getElementById("listaNumeros");
listaNumeros.innerText = "Lista de numeros: " + lista1;

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (nuevoElemento, valorAcumulado) {
            return nuevoElemento + valorAcumulado;
        }
    );
    return sumaLista / lista.length
}

function onClickMediaAritmetica() {
    const promedio = document.getElementById("resultado");
    promedio.innerText = "El promedio de la lista es: " + calcularMediaAritmetica(lista1);
}

function onClickAdd() {
    const nuevo = document.getElementById("numero");
    const valor = nuevo.value;
    lista1.push(Number(valor));
    listaNumeros.innerText = "Lista de numeros: " + lista1;
}

