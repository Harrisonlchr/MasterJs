// funcion normal de tipo JavaScript
function getNumero(n =12){
  return "El numero es: " + n;
};


// funcion en TypeScript con opcion de tipado de retorno e ingreso
function getNumero2(n:number =12):string{
  return "El numero es: " + n;
};

console.log(getNumero2(25));
