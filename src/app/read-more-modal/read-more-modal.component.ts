import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-read-more-modal',
  templateUrl: './read-more-modal.component.html',
  styleUrls: ['./read-more-modal.component.css']
})
export class ReadMoreModalComponent {
  constructor(private modalService: NgbModal){}
  
  closeModal() {
		this.modalService.dismissAll(ReadMoreModalComponent);
	}

}
