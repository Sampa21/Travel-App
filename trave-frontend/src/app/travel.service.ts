import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private apiUrl = 'http://localhost:5001/api/travels'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Method to fetch all travels
  getTravels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Method to add a new travel
  createTravel(travel: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, travel);
  }
}
