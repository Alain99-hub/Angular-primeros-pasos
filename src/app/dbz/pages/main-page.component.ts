import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class NamePageComponent {

  constructor(private dbzService: DbzService) {

  }

  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterByID(id);
  }

  onNewCharacter(caracter: Character): void {
    this.dbzService.addCharacter(caracter)
  }

}

