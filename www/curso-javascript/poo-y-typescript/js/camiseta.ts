// Clase (molde del objeto)
class Camiseta{

// Propiedades (caracteristicas del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

// Metodos (Funciones o acciones del objeto)
    public setColor(color){
      this.color = color;
    }
    public getColor(){
      return this.color;
    }

}

 var camiseta = new Camiseta();
 camiseta.setColor('Rojo');
 //camiseta.getColor();

 var playera = new Camiseta();
 playera.setColor('Azul');
 //playera.getColor();

 console.log(camiseta.getColor(), playera);
