import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfigService } from '../modalConfig.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  constructor(private config : ConfigService, private players : PlayerService) { }
  error = '';
  nameplayerone = new FormControl('');
  nameplayertwo = new FormControl('');
  ngOnInit(): void {
  }
  
  getShow() {
    return this.config.getModalStatus();
  }

  cancel() {
    this.config.cancel();
  }

  savePlayer(num : number, player : FormControl) {
    if(player.invalid) {
      this.error = 'Please enter a valid name!';
    } else {
      this.error = '';
      this.players.setPlayer(num , player.value);
      this.config.cancel();
    }
  }
}
