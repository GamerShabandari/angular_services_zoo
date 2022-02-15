import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAnimalComponent } from './add-new-animal.component';

describe('AddNewAnimalComponent', () => {
  let component: AddNewAnimalComponent;
  let fixture: ComponentFixture<AddNewAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
