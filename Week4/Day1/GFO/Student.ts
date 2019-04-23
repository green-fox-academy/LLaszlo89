'use strict';

import { Person } from "./Person";
export class Student extends Person {
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
