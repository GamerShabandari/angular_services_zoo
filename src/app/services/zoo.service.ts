import { Injectable } from '@angular/core';
import { interval, observable, Observable, of } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class ZooService {

  private animals: Animal[] = [];
  animals$: Observable<Animal[]> = of(this.animals);

  constructor() { }


  feedAnimal(index:number) {

    this.animals[index].isHungry = !this.animals[index].isHungry

  }

  removeAnimal(index:number) {

    this.animals.splice(index, 1);

  }

  addAnimal(animalToAdd: string) {

        this.animals.push(new Animal(animalToAdd))
     
  }
}
