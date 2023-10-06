import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { RequestDataInterface } from 'src/app/new-request-form/new-request-form.component';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  private setRequestSubject$ = new BehaviorSubject<RequestDataInterface[]>([]);
  allRequests$ = this.setRequestSubject$.asObservable();
  url = 'http://localhost:3000/requests';

  constructor(private http: HttpClient) {}

  saveRequestForm(form: RequestDataInterface) {
    this.http.post<RequestDataInterface[]>(this.url, form).subscribe((res) => {
      this.getAllRequests();
    });
  }

  editRequest(form: RequestDataInterface, id: number) {
    this.http
      .put<RequestDataInterface[]>(`${this.url}/${id}`, form)
      .subscribe((res) => {
        this.getAllRequests();
      });
  }

  deleteRequest(id: number) {
    this.http
      .delete<RequestDataInterface[]>(`${this.url}/${id}`)
      .subscribe((res) => {
        this.getAllRequests();
      });
  }

  getAllRequests() {
    this.http.get<RequestDataInterface[]>(this.url).subscribe((res) => {
      this.setRequestSubject$.next(res);
    });
  }
}
