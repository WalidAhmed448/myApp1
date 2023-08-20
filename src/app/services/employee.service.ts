import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../core/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<Employee> {
    return this._http.post<Employee>('http://localhost:3000/posts', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/posts/${id}`, data);
  }

  getEmployeeList(): Observable<Employee[]> {
    return this._http.get<Employee[]>('http://localhost:3000/posts');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/posts/${id}`);
  }
}
