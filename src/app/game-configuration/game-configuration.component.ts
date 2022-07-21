import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../modalConfig.service';

@Component({
  selector: 'app-game-configuration',
  templateUrl: './game-configuration.component.html',
  styleUrls: ['./game-configuration.component.css']
})
export class GameConfigurationComponent implements OnInit {

  constructor(private config : ConfigService) { }

  ngOnInit(): void {
  }

  show(){
    this.config.show();
  }

}
