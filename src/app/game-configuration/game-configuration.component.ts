import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../modalConfig.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-game-configuration',
  templateUrl: './game-configuration.component.html',
  styleUrls: ['./game-configuration.component.css']
})
export class GameConfigurationComponent implements OnInit {

  constructor(private config : ConfigService, private players : PlayerService) { }

  ngOnInit(): void {
  }

  show(num : number){
    this.config.show(num);
  }

  getPlayer(num : number) {
    return this.players.getPlayer(num);
  }
}
