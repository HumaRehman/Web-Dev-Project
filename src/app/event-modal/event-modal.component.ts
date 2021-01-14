import {Component, Input} from '@angular/core';
import { EventModalService } from '../services/event-modal.service';
import {Event} from '../models/Event';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-event-modal',
  templateUrl: './event-modal.component.html'
})
export class EventModalComponent {
  @Input() user!:string;  //gets user from click 
  artistEvents!:Event[];  // saves the events of the artit called
  
  constructor(private modalService: NgbModal, private eventModalService:EventModalService) {}

  ngOnInit()
  {
    //calling events based on artists names
    this.eventModalService.getEvent(this.user).subscribe(response => {
      this.artistEvents = response;
    });
  }
  //function to close modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}