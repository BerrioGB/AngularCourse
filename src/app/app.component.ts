import { Component } from '@angular/core';
import { movie } from './movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Carlitos'
  age = '22'
  city = 'Belen SanBer'
  img = 'https://trabajosdiarios.com/storage/logo/co/MVMI/kgYU4hVJerIkKZCtkZSj4PHUo6AEAqOnrsMnsmpV.png'
  btnState = true

  /**Objeto Para el login */
  registro = {
    name: '',
    email:'',
    password:''
  }
  /**Objeto ngStyles */
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  /**Variable estilos dinamicos */
  widthImg = 10;

  /* String Para *nfFor*/
  names: string[] = ['Juan', 'Javier', 'Santiago']
  newName = ''


  /*Trabajando con objetos*/
  person = {
    name: 'Antonio',
    age: 30,
    city: 'Miami',
    img: 'https://trabajosdiarios.com/storage/logo/co/MVMI/kgYU4hVJerIkKZCtkZSj4PHUo6AEAqOnrsMnsmpV.png'

  }
  /** Arreglo de objetos con productos para *nfFor en arreglos*/
  movies: movie[] = [
    {
      name:'pelicula 1',
      price: 100,
      portada: "../assets/img/american.jpg"
    },
    {
      name:'pelicula 2',
      price: 200,
      portada: "../assets/img/Figth.jpg"
    },
    {
      name:'pelicula 3',
      price: 300,
      portada: "../assets/img/inter.jpg"
    },
    {
      name:'pelicula 4',
      price: 400,
      portada: "../assets/img/pulp.jpg"
    },
    {
      name:'pelicula 5',
      price: 500,
      portada: "../assets/img/rocky.jpg"
    }
  ]

  /*Primer Metodo*/

  toggleButton() {
    this.btnState = !this.btnState
  }
  ageInc() {
    this.person.age += 1
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

  onKey(event: Event) {
    const element = event.target as HTMLInputElement
    this.person.name = element.value

  }
  newNom() {
    this.names.push(this.newName)
    this.newName = ''
  }
  deleteName(index: number) {
    this.names.splice(index, 1)
  }
  OnRegister(){
    console.log(this.registro)
  }

}
