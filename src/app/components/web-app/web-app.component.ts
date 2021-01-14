import { Component, OnInit } from '@angular/core';
import {Artist} from '../../models/Artist'
import {ArtistService} from "../../services/artist.service"
import {Event} from '../../models/Event'
import { CollapseModule } from 'angular-bootstrap-md';
@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.css']
})
export class WebAppComponent implements OnInit {

  artistList: Artist[] = [];
  List: Artist[] = [];
  eventsList: Event[] = [];
  nameList:string[] = [];
  constructor(private artistService:ArtistService) {
    //this.artistList=[];
   // console.log("I'm here");
   }

  ngOnInit() {
    //getting list of artists
    this.artistService.getArtist().subscribe(responseList => {
      this.artistList = responseList;

      console.log(this.artistList.length);
      // removing error objects from artist list

      this.artistList = this.artistList.filter((value, index, array) => {
        
        if ('error' in value)
        {
          	return false;
        }
        else
        {
          return true;
        }
      });

    });
	  
	
  }
} 
