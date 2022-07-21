import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../modalConfig.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  constructor(private config : ConfigService) { }

  ngOnInit(): void {
  }
  
  getShow() {
    return this.config.getModalStatus();
  }

  cancel() {
    this.config.cancel();
  }



}
