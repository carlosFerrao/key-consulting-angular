import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, take } from 'rxjs';
import { RequestDataInterface } from 'src/app/new-request-form/new-request-form.component';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  private setRequestSubject$ = new BehaviorSubject<RequestDataInterface[]>([
    { user: 'EDF', contract: '123456', project: ' Key Consulting' },
  ]);
  allRequests$ = this.setRequestSubject$.asObservable();

  constructor(private http: HttpClient) {}

  saveRequestForm(form: RequestDataInterface) {
    this.allRequests$.pipe(take(1)).subscribe((val) => {
      const newArr = [...val, form];
      this.setRequestSubject$.next(newArr);
    });
  }

  editRequest(formToEdit: RequestDataInterface) {
    this.allRequests$.pipe(take(1)).subscribe((val) => {
      const index = val.findIndex((form) => {
        return form.contract == formToEdit.contract;
      });
      let editArr = val;
      editArr[index] = formToEdit;
      this.setRequestSubject$.next(editArr);
    });
  }

  deleteRequest(indexDelete: number) {
    this.allRequests$.pipe(take(1)).subscribe((val) => {
      const newArr = val.filter((res, index) => index !== indexDelete);
      this.setRequestSubject$.next(newArr);
    });
  }
}
