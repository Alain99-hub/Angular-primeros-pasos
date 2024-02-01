import { Component } from '@angular/core';
import { getActiveConsumer } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();

  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age} `;
  }

  changeHero(): void {
    this.name = 'owo';
  }

  changeAge():void{
    this.age = 100;
  }

  resetForm():void{
    this.name = 'iron man';
    this.age = 45;
  }
}
