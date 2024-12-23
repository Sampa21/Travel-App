import { Component, OnInit } from '@angular/core';
import { TravelService } from './travel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  travels: any[] = [];  // Holds the data fetched from API

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.travelService.getTravels().subscribe(
      (data) => {
        console.log(data);  // Check the data in the console
        this.travels = data;  // Store the data for display
      },
      (error) => {
        console.error('Error fetching travels data:', error);
      }
    );
  }
}
