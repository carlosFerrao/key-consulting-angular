import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RequestsService } from 'src/services/requests.service';

export interface RequestDataInterface {
  project: string;
  user: string;
  contract: string;
}

@Component({
  selector: 'app-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.scss'],
})
export class NewRequestFormComponent {
  requestForm: FormGroup | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: RequestDataInterface,

    public fb: FormBuilder,
    private saveRequestService: RequestsService,
    public dialog: MatDialog
  ) {
    this.initForm();
  }

  initForm() {
    this.requestForm = this.fb.group({
      project: ['', [Validators.required]],
      user: ['', [Validators.required]],
      contract: ['', [Validators.required]],
    });

    if (this.data) {
      this.requestForm.patchValue({
        project: this.data.project,
        user: this.data.user,
        contract: this.data.contract,
      });
    }
  }

  submitForm() {
    if (this.data) {
      this.saveRequestService.editRequest(this.requestForm?.value);
      this.dialog.closeAll();
    } else {
      this.saveRequestService.saveRequestForm(this.requestForm?.value);
      this.dialog.closeAll();
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
