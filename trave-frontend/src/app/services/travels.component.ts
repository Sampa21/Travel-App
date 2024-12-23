import { Component, OnInit } from '@angular/core';
import { TravelService } from '../services/travel.service';
import { Travel } from '../models/travel.model';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css'],
})
export class TravelsComponent implements OnInit {
  travels: Travel[] = [];
  newTravel: Travel = { name: '', country: '', description: '', rating: 0 };

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels(): void {
    this.travelService.getTravels().subscribe((data) => (this.travels = data));
  }

  onSubmit(): void {
    this.travelService.addTravel(this.newTravel).subscribe((travel) => {
      this.travels.push(travel);
      this.newTravel = { name: '', country: '', description: '', rating: 0 };
    });
  }

  editTravel(travel: Travel): void {
    // Add logic for editing
  }

  deleteTravel(id: string | undefined): void {
    if (!id) return;
    this.travelService.deleteTravel(id).subscribe(() => {
      this.travels = this.travels.filter((t) => t.id !== id);
    });
  }
}
