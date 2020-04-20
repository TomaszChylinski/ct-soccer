import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  serverName = 'Testserver';
  username = '';
  allowNewUser = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was Created name is ${this.serverName}`;
  }

  onUpdateServerNmae(event: any) {
    this.serverName = event.target.value;
  }

  updateUserBtn(event: any) {
    this.username = event.target.value;
    if (this.username.length >= 1) {
      this.allowNewUser = true;
    }else{
      this.allowNewUser = false;
    }
  }

  enableUser() {
    if (this.username.length < 1) {
      this.allowNewUser = true;
    }
  }

  resetUser() {
    this.username = '';
  }
}
