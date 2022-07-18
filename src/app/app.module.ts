import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameConfigurationComponent } from './game-configuration/game-configuration.component';
import { PlayerComponent } from './player/player.component';
import { ActiveGameComponent } from './active-game/active-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameConfigurationComponent,
    PlayerComponent,
    ActiveGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
