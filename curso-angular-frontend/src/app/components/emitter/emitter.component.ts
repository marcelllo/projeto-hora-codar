import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {

  numero: number = 0;

  constructor() { }

  ngOnInit(): void { }

  onChangeNumber(): void {
    this.numero = Math.floor(Math.random() * 100);
  }

}
