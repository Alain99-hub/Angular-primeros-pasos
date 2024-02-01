import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import {v4 as uudi} from 'uuid';

@Injectable({providedIn: 'root'})

export class DbzService {
  public characters: Character[] = [{
    id: uudi(),
    name: 'krilin',
    power:444
  },{
    id: uudi(),
    name: 'kokun',
    power: 9999
  },{
    id: uudi(),
    name: 'vegeta',
    power: 7500
  }];


  addCharacter(character: Character):void{

    const newCharacter: Character = {id: uudi(),name: character.name, power: character.power }

    this.characters.push(newCharacter);
  }

  // OnDeleteCharacter(index:number){
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterByID(id: string){
    this.characters = this.characters.filter(C => C.id !== id);
  }

}
