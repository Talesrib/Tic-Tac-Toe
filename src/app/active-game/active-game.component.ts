import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-active-game',
  templateUrl: './active-game.component.html',
  styleUrls: ['./active-game.component.css']
})
export class ActiveGameComponent implements OnInit {
  gameStatus : string
  gameItems : any
  player : string
  winner : string | undefined
  constructor(private players : PlayerService, private board : GameService) {
    this.gameStatus = '';
    this.gameItems = [[0, 0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
    this.player = this.players.getActivePlayer();
   }

  ngOnInit(): void {
  }

  checkResult() {
    let result = this.board.checkresult();
    if(result !== 0) {
      if(result !== -1){
        this.gameStatus = 'over';
        this.winner = this.players.getPlayer(result);
      } else {
        this.gameStatus = 'draw';
      }
    }
  }

  getPlayer() {
    return this.players.getActivePlayer();
  }

}
