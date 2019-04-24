'use strict '


abstract class Animal {
  name: string;
  age: number;

constructor( name:string, age = Math.floor((Math.random() * 10) + 1) ){
  this.name = name
  this.age = age
  
}


  getName(): string {
  return this.name;
  }

  breed(): void {

  }

  AudioTrackList(): void {

  }

  hgkdef(): void {

  }

  hfhhf(): void {

  }

}

class Mammal extends Animal{
breed(){
  'pushing miniature versions out'
}


}

class Reptile extends Animal{
breed(){
  'laying eggs too'
}
}

class Bird extends Animal{
  breed(){
    return "laying eggs"
  }
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log(`A  ${bird.getName()} megvaan ${bird.breed()}`);