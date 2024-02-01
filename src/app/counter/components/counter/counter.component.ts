import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
  <h2>Counter: {{counter}} </h2>
  <button (click)="increadebyone(+1)" >+1</button>
  <button (click)="increadebyone(-1)">-1</button>
  <button (click)="resetCounter()">RESET</button>

  `
})
export class CounterComponent{

  public counter: number= 10;

  increadebyone(parameter:number):void{
    this.counter += parameter;
  }

  resetCounter(){
    this.counter =10;
  }

}
