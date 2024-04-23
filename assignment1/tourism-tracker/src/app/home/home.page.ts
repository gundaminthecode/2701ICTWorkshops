import { Component } from '@angular/core';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  username = this.usernameService.username;

  constructor(private usernameService: UsernameService) {}

}
