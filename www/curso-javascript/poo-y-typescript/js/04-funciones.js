// funcion normal de tipo JavaScript
function getNumero(n) {
    if (n === void 0) { n = 12; }
    return "El numero es: " + n;
}
;
// funcion en TypeScript con opcion de tipado de retorno e ingreso
function getNumero2(n) {
    if (n === void 0) { n = 12; }
    return "El numero es: " + n;
}
;
console.log(getNumero2(25));
