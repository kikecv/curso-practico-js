//Código del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4;
}
console.log("El perímetro del cuadrado es: " + perimetroCuadrado(56) + " cm");

function areaCuadrado(lado) {
    return lado * lado;
}
console.log("El área del cuadrado es: " + areaCuadrado(12) + " cm^2");
console.groupEnd();

//Código del triángulo
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
console.log("El perímetro del triángulo es: " + perimetroTriangulo(6, 6, 4) + " cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo(4, 5.5) + " cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculos")
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.log("El diámetro del círculo es: " + diametroCirculo(5) + " cm");
console.log("PI es: " + PI);
console.log("El perímetro del círculo es: " + perimetroCirculo(5) + " cm");
console.log("El área del círculo es: " + areaCirculo(5) + " cm^2");
console.groupEnd();

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const base = Number(input3.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTrianguloAltura");
    const altura = input.value;
    const input2 = document.getElementById("InputTrianguloBase");
    const base = input2.value;
    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularDiametroCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const diametro = diametroCirculo(input.value);
    alert(diametro)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const perimetro = perimetroCirculo(input.value);
    alert(perimetro)
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const area = areaCirculo(input.value);
    alert(area)
}

//Código del círculo
console.group("Triángulos Isósceles");

function alturaTriangulo(a, b, c) {

    if ((a == b && b == c) || (a != b && b != c && a!=c)) {
        console.error("No es un triángulo Isósceles")
    }
    else if (a + b > c && b + c > a && a + c > b) {
        let base;
        let ladoIgual;
        if (a == b) {
            base = c;
            ladoIgual = a;
        } else if (b == c) {
            base = a;
            ladoIgual = b;
        } else {
            base = b;
            ladoIgual = c;
        }
        const resultado = Math.sqrt(Math.pow(ladoIgual, 2) - (Math.pow(base, 2) / 4));
        return resultado > 0 ? resultado : 0;
    } else {
        console.error("Valores invalidos")
    }

}
console.log("La altura del triángulo es: " + alturaTriangulo(3, 2, 2) + " cm");
console.log("La altura del triángulo es: " + alturaTriangulo(2, 3, 2) + " cm");
console.log("La altura del triángulo es: " + alturaTriangulo(2, 2, 3) + " cm");
console.log("La altura del triángulo es: " + alturaTriangulo(3, 3, 3) + " cm");
console.log("La altura del triángulo es: " + alturaTriangulo(2, 3, 1) + " cm");

console.groupEnd();
