import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { NpsApiService } from '../nps-api.service';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css'],
  providers: [ NpsApiService ]
})
export class ParkListComponent implements OnInit {
  parksResult: any[]=[];
  state = "";
  constructor(
    private route: ActivatedRoute,
    private listOfParks: NpsApiService
  ) {}

  ngOnInit() {
    this.route.queryParams.forEach(p => {
      const param = p["state"];
      this.getParks(param);
      this.state = param;
    });
  }

  getParks(state: string) {
    this.listOfParks.getByState(state).subscribe(response => {
      this.parksResult = response.json();
    });
  }

}
