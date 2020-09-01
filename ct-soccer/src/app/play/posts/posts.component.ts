import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  enteredValue = '';
  newPost = '';


  onAddPost() {
    console.log('show me your tits ', this.enteredValue);
    this.newPost = this.enteredValue;

  }

  constructor() {}

  ngOnInit(): void {}
}
