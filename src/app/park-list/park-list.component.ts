import { Component, OnInit } from '@angular/core';
import { Park } from '../models/park.model';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.component.html',
  styleUrls: ['./park-list.component.css']
})
export class ParkListComponent {
  filterByState: string = "byState";

  onChange(optionFromMenu) {
    this.filterByState = optionFrom Menu;
  }

}
