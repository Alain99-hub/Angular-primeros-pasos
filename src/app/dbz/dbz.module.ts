import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamePageComponent } from './pages/main-page.component';
import { ListComponentDbz } from './components/lists/list.component';
import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [  //lo que se declara dentro de nuestro ngmodule
    NamePageComponent,
    ListComponentDbz,
    AddCharacterComponent

  ],
  exports:[//todo lo que se ve o se exporta
    NamePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
