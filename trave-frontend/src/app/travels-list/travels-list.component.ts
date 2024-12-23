import { Component, OnInit } from '@angular/core';
import { TravelService } from './travel.service';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit {
  travels: any[] = [];

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.loadTravels();
  }

  loadTravels(): void {
    this.travelService.getTravels().subscribe(
      (data) => {
        this.travels = data;
      },
      (error) => {
        console.error('Error loading travels', error);
      }
    );
  }
}
