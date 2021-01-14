import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Event} from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventModalService {

  eventUrl:string =  'https://rest.bandsintown.com/artists/';
  eventLimit:string = '/events/?app_id=abc';
  url:string = "";

  constructor(private http:HttpClient) { }

  // get events on artist name
  getEvent(artistName:string):Observable<Event[]>{
    
    let url = this.url.concat(this.eventUrl,artistName,this.eventLimit );
    
    // console.log(url);

    return this.http.get<Event[]>(`${url}`);
  } 
}
