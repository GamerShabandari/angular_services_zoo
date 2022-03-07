import { Component, OnInit } from '@angular/core';
import { ZooService } from 'src/app/services/zoo.service';

@Component({
  selector: 'app-add-new-animal',
  templateUrl: './add-new-animal.component.html',
  styleUrls: ['./add-new-animal.component.scss']
})
export class AddNewAnimalComponent implements OnInit {

  constructor(private service:ZooService) { }

  ngOnInit(): void {
  }

  addAnimal(type:string, url:string, hungryUrl:string){

    if(type===""){
      return
    }else{
      this.service.addAnimal(type, url, hungryUrl)
    }
  }

}
