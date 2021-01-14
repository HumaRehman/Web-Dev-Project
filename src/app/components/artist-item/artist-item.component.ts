import { Component, OnInit , Input } from '@angular/core';
import { Artist} from "src/app/models/Artist";

import {EventModalComponent} from "../../event-modal/event-modal.component"
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css']
})
export class ArtistItemComponent implements OnInit {
  @Input() item!: Artist;
  
  constructor(private modalService: NgbModal) {
      
   }

  ngOnInit(): void {
    
  }
  // to check is events are greater then zero
  public greaterThan(subj: number, num: number) {
    if (subj>num)
      return true;
    else
      return false;
  }

// funtion to open modal
  openModal(artistName:string) {
    const modalRef = this.modalService.open(EventModalComponent,{ size: 'lg' });
    modalRef.componentInstance.user = artistName;
    }


}

