import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReadMoreModalComponent } from '../read-more-modal/read-more-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private modalService: NgbModal){}



  openVerticallyCentered() {
		this.modalService.open(ReadMoreModalComponent, { centered: true ,  size: 'lg' });
	}


}
