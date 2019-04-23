'use strict';

class Person {
  name: string;
  age: number;
  gender: string;



  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce(): void {
    console.log(`Hi, I'am ${this.name}, ${this.age} year old anem my gender is ${this.gender}`);
  }

  getGoal(): void {
    console.log(`My gola is live for the moment`);
  }
}

export { Person };
