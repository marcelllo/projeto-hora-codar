import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Marcelo';
  age: number = 36;
  job = "Programador";
  hobbies = ["Bike", "Futebol", "Buteco", "Programar"];
  car = {
    name: "Focus",
    year: 2010
  }

  constructor() { }

  ngOnInit(): void {
  }

}
