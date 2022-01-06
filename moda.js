const lista1 = [1, 2, 6, 1, 2, 6, 4, 2, 2, 2, 1];

const listaNumeros = document.getElementById("listaNumeros");
listaNumeros.innerText = "Lista de numeros: " + lista1;

function calculaModa(lista) {

    const listaCount = arrayToObject(lista) ;

    console.log(listaCount);
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    console.log(listaArray);
    return listaArray[listaArray.length - 1][0]
}

function onClickAdd() {
    const nuevo = document.getElementById("numero");
    const valor = nuevo.value;
    lista1.push(Number(valor));
    listaNumeros.innerText = "Lista de numeros: " + lista1;

}

function onClickModa(){
    const resultado = document.getElementById("resultado");
    resultado.innerText = "La moda de la lista es: " + calculaModa(lista1);
}

function arrayToObject(lista){
    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    return listaCount;
}



