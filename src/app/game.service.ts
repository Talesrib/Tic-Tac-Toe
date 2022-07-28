import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  board = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ];
  round = 0;

  constructor() { }

  play(index : any, symbol : string) {
    if(symbol === 'X'){
      this.board[index[0]][index[1]] = 1;
      this.round++;
      console.log(this.checkresult());
    } else if(symbol === 'O') {
      this.board[index[0]][index[1]] = 2;
      this.round++;
      console.log(this.checkresult());
    }
  }

  checkresult() {
    for (let l = 0; l < 3; l++) {
      if(this.board[l][0] > 0 && this.board[l][0] === this.board[l][1] && this.board[l][1] === this.board[l][2]){
        return this.board[l][0];
      }
    }

    for (let c = 0; c < 3; c++) {
      if(this.board[0][c] > 0 && this.board[0][c] === this.board[1][c] && this.board[1][c] === this.board[2][c]){
        return this.board[0][c];
      }
    }

    if (this.board[0][0] > 0 && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]){
      return this.board[0][0];
    }

    if (this.board[0][2] > 0 && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]){
      return this.board[0][2];
    }
    
    if (this.round === 9){
      return -1;
    }

    return 0;
  }
}
