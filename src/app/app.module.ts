import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroModule } from './heroes/herores.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    DbzModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
