const valor1 = prompt ("Ingresa tu valor 1 en letras");
const valor2 = prompt ("Ingresa tu valor 2 en letras");
const valor3 = prompt ("Ingresa tu valor 3 en letras");

const conversion1 = parseInt(valor1);
const conversion2 = parseInt(valor2);
const conversion3 = parseInt(valor3);

const parra = document.querySelector("#parra");


if (valor1 > valor2 && valor1 > valor3) {
    parra.innerHTML = "El numero mas grande es " + valor1;
}

else if (valor2 > valor1 && valor2 > valor3) {

    parra.innerHTML = "El numero mas grande es " + valor2;
}

else  {
    parra.innerHTML = "El numero mas grande es " + valor3;
}