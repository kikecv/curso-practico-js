const lista1 = [1, 2, 6, 1, 2, 6, 4, 2, 2, 2, 1];


function calculaModa(lista){
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

    console.log(listaCount);
    
    const listaArray = Object.entries(listaCount).sort(
        function(elementoA,elementoB){  
            return elementoA[1] - elementoB[1];
        }
    );

    console.log(listaArray);

    return listaArray[listaArray.length-1]

}



