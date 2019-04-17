import { Component, OnInit } from '@angular/core';
import {GameListService} from '../../../services/game-list.service'


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(private GameListService:GameListService) { }

  ngOnInit() {
    this.GameListService.GetGameList().subscribe(
      gameList=>console.log(gameList),
      error=>console.log(error.message),
      ()=>{}


    )
    }


}
