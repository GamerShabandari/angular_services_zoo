import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class ZooService {

  private animals: Animal[] = [
    new Animal("lion", 12),
    new Animal("tiger", 7)
  ];

  constructor() { }

  getAnimals(): Animal[] {

    return this.animals;

  }

  feedAnimal(animalToFeed: Animal) {

    for (let i = 0; i < this.animals.length; i++) {
      const animal_i = this.animals[i];

      if(animalToFeed.type === animal_i.type)

      animal_i.isHungry = ! animal_i.isHungry
      
    }

  }

  removeAnimal(animalToRemove: Animal){

    for (let i = 0; i < this.animals.length; i++) {
      const animal_i = this.animals[i];

      if(animalToRemove.type === animal_i.type)

      this.animals.splice(i,1);
      
    }

  }

  addAnimal(animalToAdd:string, age:string){

    console.log(animalToAdd);
    console.log(age);

    this.animals.push(new Animal(animalToAdd, Number(age)))

  }
}
