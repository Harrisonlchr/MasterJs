// asignar un objeto
type alfanumerico2 = string | boolean;
let otraVariable: alfanumerico2;
otraVariable = true;
otraVariable = "tuPapa";

// Multiple tipo de datos
let alfanumerico: string | number;
alfanumerico = 55;
alfanumerico = "hola";

// string
let cadena: string = "Harrison Chacon";

// number
let numero: number = 27;

// boleano
let verdadero_falso: boolean = true;

// any
let cualquiera: any = "hola";
//cualquiera = 77;

// arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];
var todos: Array<any> = ["PHP", "JS", "CSS",23,30];
let years: number[]= [12,15,17];



console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, todos, years);
