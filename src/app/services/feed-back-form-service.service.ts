import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedBackFormServiceService {

  private apiUrl = 'http://localhost:8080'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  submitFeedback(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit-feedback`, formData);
  }
}
