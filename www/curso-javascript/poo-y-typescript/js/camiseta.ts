// interface
interface CamisetaBase {
    setColor(color);
    getColor();
}

// Clase (molde del objeto)
class Camiseta implements CamisetaBase{

// Propiedades (caracteristicas del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

// Constructor
  constructor(color, modelo, marca, talla, precio){
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
}
// Metodos (Funciones o acciones del objeto)
    public setColor(color){
      this.color = color;
    }

    public getColor(){
      return this.color;
    }
}

// clase hija
class Sudadera extends Camiseta{
// atributos
  public capucha: boolean;
// constructor(){

// metodos
  setCapucha(capucha: boolean){
      this.capucha = capucha;
  }
  getCacpucha():boolean{
    return this.capucha;
  }

}

var camiseta = new Camiseta("a","bb","ccc","dddd",17);
console.log(camiseta);

var sudadera_nike = new Sudadera("","","","",2);
sudadera_nike.setCapucha(true);
sudadera_nike.getCacpucha;
sudadera_nike.setColor("Verde");

console.log(sudadera_nike);
