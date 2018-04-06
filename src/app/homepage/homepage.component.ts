import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NpsApiService } from '../nps-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ NpsApiService ]
})
export class HomepageComponent {

  parksResult: any[]=null;
  constructor(private listOfParks: NpsApiService) { }

  getParks(state: string) {
    this.listOfParks.getByState(state).subscribe(response => {
      this.parksResult = response.json();
    });
  }

}
