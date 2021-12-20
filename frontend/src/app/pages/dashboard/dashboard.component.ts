import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Family } from 'src/app/models/family.models';
import { User } from 'src/app/models/user.models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FamilyService } from 'src/app/services/family/family.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  noFamily = true;

  families: BehaviorSubject<Family[]> = new BehaviorSubject<Family[]>([]);
  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  constructor(private familyService: FamilyService, private userService: AuthService) { }

  ngOnInit(): void {
    this.familyService.getFamilies().subscribe(families => this.families.next(families));
    this.userService.getUser().subscribe(user => this.user.next(user))
  }

  getName(): string {
    return this.user.value ? this.user.value.firstName : '';
  }
}
