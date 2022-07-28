import { Injectable } from '@angular/core';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players = [
    {
      name: 'Player 1',
      symbol: 'X'
    },
    {
      name: 'Player 2',
      symbol: 'O'
    }
  ]
  activePlayer = 0;

  constructor(private board : GameService) { }

  getActivePlayer() {
    return this.players[this.activePlayer].name;
  }

  playTurn(index : any) {
    let result = this.players[this.activePlayer].symbol;
    if(this.activePlayer === 0) {
      this.board.play(index, result);
      this.activePlayer = 1;
      return result;
    }
    this.board.play(index, result);
    this.activePlayer = 0;
    return result;
  }

  setPlayer(num : number, name : string) {
    if(num === 1){
      console.log(name);
      this.players[0].name = name;
    } else {
      console.log(name);
      this.players[1].name = name;
    }
  }

  getPlayer(num : number) {
    if(num === 1){
      return this.players[0].name;
    } 
    return this.players[1].name;
  }
}
