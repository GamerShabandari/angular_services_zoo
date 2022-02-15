import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { ZooService } from 'src/app/services/zoo.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  animals: Animal[] = []

  constructor(private service: ZooService) { }

  ngOnInit(): void {

    this.animals = this.service.getAnimals();

  }

  feedMe(animal:Animal){
    this.service.feedAnimal(animal)
  }

  deleteMe(animal:Animal){
    this.service.removeAnimal(animal)
  }

}
