import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Artist} from '../models/Artist'
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  artistUrl:string =  'https://rest.bandsintown.com/artists/id_';
  artisLimit:string = '?app_id=abc';
  url:string = "";
  artist!:string[];
  public artistList!:any[]
  constructor(private http:HttpClient) { }
  // to get artist data
  getArtist():Observable<Artist[]>{
    //console.log('Loading Data...');
    let responseArray = []
    for (let i = 1; i <= 50; i++) 
    {
      let url = this.url.concat(this.artistUrl,i.toString(),this.artisLimit );
      responseArray.push(this.http.get<Artist>(`${url}`));
    }
    
    this.artistList = responseArray
    return forkJoin(responseArray);
  } 
}
