import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() index : any
  symbol = ''
  constructor(private players : PlayerService) { }

  ngOnInit(): void {
  }

  play() {
    if(!this.symbol){
      this.symbol = this.players.playTurn(this.index);
    }
  }

}
