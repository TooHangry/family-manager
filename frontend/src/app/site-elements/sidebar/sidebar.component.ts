import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavService } from 'src/app/services/nav/nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  shouldDisplay: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(private router: Router, private navService: NavService) { }

  ngOnInit(): void {
    this.navService.shouldShoNav.subscribe(showNav => {
      this.shouldDisplay.next(showNav);
    })
  }

  route(routeTo: string): void {
    this.router.navigate([routeTo])
  }

}
