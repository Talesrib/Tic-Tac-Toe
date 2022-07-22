import { Injectable } from '@angular/core';

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
  constructor() { }
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
