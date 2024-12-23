import { Component } from '@angular/core';
import { TravelService } from './travel.service';

@Component({
  selector: 'app-travel-create',
  templateUrl: './travel-create.component.html',
  styleUrls: ['./travel-create.component.css']
})
export class TravelCreateComponent {
  travel = { name: '', country: '', description: '', rating: 1 };

  constructor(private travelService: TravelService) {}

  createTravel(): void {
    this.travelService.createTravel(this.travel).subscribe(
      (response) => {
        console.log('Travel created', response);
      },
      (error) => {
        console.error('Error creating travel', error);
      }
    );
  }
}
