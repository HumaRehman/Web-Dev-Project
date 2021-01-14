import { Component, OnInit, Input } from '@angular/core';
import {Artist} from '../../models/Artist'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'angular-text-search-highlight';
  searchText!:string ;
  @Input() artistList!: Artist[];
  constructor() { }

  ngOnInit(): void {

    
  }
 

}
