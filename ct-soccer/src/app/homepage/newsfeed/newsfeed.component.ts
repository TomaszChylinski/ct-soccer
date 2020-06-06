import { Component, OnInit } from '@angular/core';
import { Feed } from './newsfeed.model';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
})
export class NewsfeedComponent implements OnInit {

  newsFeed: Feed[] = [
    new Feed(
      '04/27',
      'Season Opener',
      '= Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis.'
    ),
    new Feed(
      '04/27',
      'Season Opener',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis.'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
