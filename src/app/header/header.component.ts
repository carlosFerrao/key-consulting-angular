import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewRequestFormComponent } from '../new-request-form/new-request-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(NewRequestFormComponent);
  }
}
