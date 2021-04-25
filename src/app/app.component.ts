import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from './services/service.service';
import { UserService } from './services/user.service';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MeDrAppADMIN';subscription: Subscription;
  constructor(
    public _user: UserService,
    private _route: Router,
    public _ds: ServiceService
  ) {
    this.subscription = _route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !_route.navigated;
      }
  });
  }
}
