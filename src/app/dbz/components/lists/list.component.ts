import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";
import { Console } from "console";

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'

})


export class ListComponentDbz{

  @Input()
  public characterList: Character[] =[{
    name: 'trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index?: string):void{

    if(!index)
      return;

    this.onDelete.emit(index);
  }
}
