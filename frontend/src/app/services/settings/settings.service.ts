import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  isDarkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  

  toggleDarkMode(): void {
    if (this.getDarkModeFromLocalStorage()) {
      localStorage.removeItem('dark')
      this.isDarkMode.next(false);
      console.log('off')
      return
    }

    localStorage.setItem('dark',  'true');
    this.isDarkMode.next(true);
    console.log('on')

  }

  getDarkMode(): Observable<boolean> {
    this.isDarkMode.next(this.getDarkModeFromLocalStorage());
    return this.isDarkMode;
  }


  private getDarkModeFromLocalStorage(): boolean {
    const valueFromStorage = localStorage.getItem('dark');
    return valueFromStorage !== null && valueFromStorage.length > 0;
  }
}
