import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from '../models/travel.model';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private apiUrl = 'http://localhost:3000/travels'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  getTravels(): Observable<Travel[]> {
    return this.http.get<Travel[]>(this.apiUrl);
  }

  addTravel(travel: Travel): Observable<Travel> {
    return this.http.post<Travel>(this.apiUrl, travel);
  }

  updateTravel(id: string, travel: Travel): Observable<Travel> {
    return this.http.put<Travel>(`${this.apiUrl}/${id}`, travel);
  }

  deleteTravel(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
