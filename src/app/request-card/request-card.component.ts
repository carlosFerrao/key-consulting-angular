import { Component, Input, OnInit } from '@angular/core';
import {
  faCoffee,
  faEllipsisVertical,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import { RequestsService } from 'src/services/requests.service';
import {
  NewRequestFormComponent,
  RequestDataInterface,
} from '../new-request-form/new-request-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {
  faEllipsisVertical = faEllipsisVertical;
  @Input() requests: RequestDataInterface[] = [];

  constructor(
    private requestService: RequestsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  deleteRequest(id: number) {
    this.requestService.deleteRequest(id);
  }

  editRequest(id: number) {
    const selectedRequest = this.requests.filter((res, index) => index == id);
    this.dialog.open(NewRequestFormComponent, {
      data: selectedRequest[0],
    });
  }
}
