import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isDark = false;
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

  toggleDarkMode(): void {
    this.settingsService.toggleDarkMode();
    this.settingsService.isDarkMode.subscribe(isDark => this.isDark = isDark);
  }

}
