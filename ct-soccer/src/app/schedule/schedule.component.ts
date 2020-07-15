import { Component, OnInit, Input } from '@angular/core';
import {Schedule} from './schedule.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
upcomingGames: Schedule[] = [
  new Schedule('Hartford vs Elm City', 'Tue 27 June'),
  new Schedule('Hartford vs Elm City', 'Sat 27 June'),
  new Schedule('Hartford vs Elm City', 'Sat 1 July'),
  new Schedule('Hartford vs Elm City', 'Sat 1 July'),
  new Schedule('Hartford vs Elm City', 'Sun 2 July'),
  new Schedule('Hartford vs Elm City', 'Sun 4 July')

];

  constructor() { }

  ngOnInit(): void {
  }

}
