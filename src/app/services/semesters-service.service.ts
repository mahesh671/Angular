import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { semesterModel } from '../models/semesterModel';

@Injectable({
  providedIn: 'root'
})
export class SemestersServiceService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSemesters(semesterId:number):Observable<semesterModel[]>
  {
    return this.http.post<semesterModel[]>(this.apiUrl+'/getSemesters',semesterId);
  }
}
