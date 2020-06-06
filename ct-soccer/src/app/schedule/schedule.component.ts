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
  new Schedule('Hartford vs Elm City', '06/27/20'),
  new Schedule('Hartford vs Elm City', '06/27/20'),
  new Schedule('Hartford vs Elm City', '06/27/20'),
  new Schedule('Hartford vs Elm City', '06/27/20'),
  new Schedule('Hartford vs Elm City', '06/27/20'),
  new Schedule('Hartford vs Elm City', '06/27/20')

];

  constructor() { }

  ngOnInit(): void {
  }

}
