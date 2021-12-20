import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './services/auth/auth.service';
import { NavService } from './services/nav/nav.service';
import { SettingsService } from './services/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Family Manager';
  showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isDarkmode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private authService: AuthService, private navServie: NavService,
    private settingsService: SettingsService) {}

  ngOnInit(): void {

    this.settingsService.getDarkMode().subscribe(isDarkMode => {
      this.isDarkmode.next(isDarkMode);
    })


    this.authService.getUser().subscribe(user => {

      this.navServie.shouldShoNav.next(true);
      this.showNavBar.next(true);
    })
  }
}