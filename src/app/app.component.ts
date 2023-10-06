import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-test-key-consulting';
  requests$ = this.request.allRequests$;

  constructor(private request: RequestsService) {}

  ngOnInit(): void {
    // this.request.getAllRequests();
  }
}
