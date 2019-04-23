/* 'use strict';

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


class Student extends Person {
  previousOrganization: string;
  skippedDays: number;


  constructor(name?: string, age?: number, gender?: string, previousOrganization = 'The school of life', skippedDays = 0) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }
  getGoal(): void {
    console.log(`My goal is: Be a junior software developer`);
  }

  introduce(): void {
    console.log(`Hi, I'am ${this.name}, ${this.age} year old anem my gender is 
    ${this.gender} from ${this.previousOrganization} who skipped  ${this.skippedDays} days from the course already`);

  }

  skipDays(numberOfDays: number) {
    return this.skippedDays += numberOfDays;
  }
}


class Mentor extends Person {
  level: string;
  constructor(name?: string, age?: number, gender?: string, level: string = 'intermadiate') {
    super(name, age, gender);
    this.level = level;
  }
  getGoal() { console.log(`My goal is: Educate brilliant junior software developers`) };


  introduce() { console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`) };

}

class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company: string = 'Google', hiredStudents: number = 0) {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;

  }
  introduce() { console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`) }
  getGoal() { console.log(`My goal is: Hire brilliant junior software developers.`) };
  hire() { return this.hiredStudents++ }

}
class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];



  constructor(name: string, ) {
    this.name = name;
    this.students = [];
    this.mentors = [];

  }

  addStudent(x: Student): void {
    this.students.push(x)
  }
  addMentor(y: Mentor): void {
    this.mentors.push(y)
  }
  info(): void {
    `The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`
  }
}

 */


import { Student } from "./student";
import { Mentor } from "./mentor"
import { Sponsor } from "./sponsor";
import { Person } from "./person"
import { Cohort } from "./cohort"




  
let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();