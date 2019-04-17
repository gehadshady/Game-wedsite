import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor(private http: HttpClient) { }

  url:string = "http://api.playit.mobi/api/v1/games/getList/2/egypt";

    GetGameList(){
      return this.http.get(this.url);

    }


}
