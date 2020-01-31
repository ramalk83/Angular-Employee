import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,throwError} from "rxjs";
import "rxjs/Rx";
import { map,retry,catchError } from 'rxjs/operators';
import { Db } from './shared/db';
import {baseURL} from './shared/baseurl';
import { Employee } from './shared/employee';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  parmname:Db;
  constructor(private http:HttpClient) { }
  
  getPosts(): Observable<Db[]> {
    return this.http
    .get<Db[]>(baseURL+'newform');
    }

  getParamtype() : Observable<Db>{
    return this.http
    .get<Db[]>(baseURL+'newform?parmtype=single').pipe(map(newform => newform[0]));
  }
  getParamname() : Observable<Db>{
    return this.http
    .get<Db[]>(baseURL+'newform?parmname=grade').pipe(map(newform => newform[0]));
  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  //Employee Api json
// Http Options
apiURL = 'http://localhost:3000';

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
})
}  
  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employees')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employees/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  createEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update employee
  updateEmployee(id, employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id){
    return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
