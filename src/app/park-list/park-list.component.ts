import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css'],
  providers: []
})
export class ParkListComponent {
  // filterByState: string = "byState";
  @Input() childParks;
  constructor() {}

}
