import { Component, OnInit } from '@angular/core';
import {GameListService} from '../../../services/game-list.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor(private GameListService:GameListService, private router:Router) { }

  ALLGamesListes:object={};

  ngOnInit() {
    this.GameListService.GetGameList().subscribe(
      AllGamesList=>this.ALLGamesListes=AllGamesList,
      error=>console.log(error.message),
      ()=>{}
    )
  }

  gotoGame(id){
    this.router.navigate(['/game',id])
  }

  }


