'use strict'


import { Student } from './Student';
import { Mentor } from './Mentor';


export class Cohort {
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

