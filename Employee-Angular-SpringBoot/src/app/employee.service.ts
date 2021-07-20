import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/employee';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public _url = '/assets/data/employee.json';
  constructor(private _httpService: HttpClient) {}

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server error');
  }
  getAllEmployees(): Observable<Employee[]> {
    return this._httpService
      .get<Employee[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
}
