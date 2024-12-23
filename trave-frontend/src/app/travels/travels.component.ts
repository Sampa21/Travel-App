// No changes are needed in your `travels.component.ts` file for this issue. However, here is the file with the required comment at the top:
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  travels: any[] = [];
  travelData = {
    name: '',
    country: '',
    description: '',
    rating: 0
  };
  isEditMode = false;
  editTravelId: string | null = null;

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.getTravels();
  }

  getTravels(): void {
    this.travelService.getTravels().subscribe((data) => {
      this.travels = data;
    });
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.travelService.updateTravel(this.editTravelId!, this.travelData).subscribe(() => {
        this.getTravels();
        this.resetForm();
      });
    } else {
      this.travelService.createTravel(this.travelData).subscribe(() => {
        this.getTravels();
        this.resetForm();
      });
    }
  }

  editTravel(travel: any): void {
    this.isEditMode = true;
    this.editTravelId = travel._id;
    this.travelData = { ...travel };
  }

  deleteTravel(id: string): void {
    this.travelService.deleteTravel(id).subscribe(() => {
      this.getTravels();
    });
  }
  loadTravels(): void {
    this.travelService.getTravels().subscribe(
      data => {
        console.log(data); // Log the response data in the console
        this.travels = data; // Assign data to travels array
      },
      error => {
        console.error('There was an error fetching travels!', error); // Log any error
      }
    );
  }
  
  resetForm(): void {
    this.isEditMode = false;
    this.editTravelId = null;
    this.travelData = {
      name: '',
      country: '',
      description: '',
      rating: 0
    };
  }
}
