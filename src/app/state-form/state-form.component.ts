import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NpsApiService } from '../nps-api.service';

@Component({
  selector: 'app-state-form',
  templateUrl: './state-form.component.html',
  styleUrls: ['./state-form.component.css'],
  providers: [ NpsApiService ]
})
export class StateFormComponent {
  parksResult: any[]=null;
  constructor(private listOfParks: NpsApiService) { }

  getParks(state: string) {
    this.listOfParks.getByState(state).subscribe(response => {
      this.parksResult = response.json();
    });
  }

}
