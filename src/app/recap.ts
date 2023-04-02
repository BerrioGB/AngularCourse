/*Tipado con typescript*/
const username: string = "juan"

const Suma = (a:number, b:number) =>{
  return a + b
}
Suma(1,2)

/* Patron de la programacion orientada a objetos*/

class Persona {
  constructor(public age:number, public lastname:string){
  }
}
const javier = new Persona(18, 'Javier')

javier.age


