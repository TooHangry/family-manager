import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = {
    id: 1,
    firstName: 'Robert',
    lastName: 'Connolly',
    email: 'rec73@uakron.edu',
  }
  constructor() { }

  getToken(): string {
    return '';
  }

  getUser(): Observable<User | null> {
    return of(this.user)
  }
}
