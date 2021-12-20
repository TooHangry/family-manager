import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Family } from 'src/app/models/family.models';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  userFamilies: BehaviorSubject<Family[]> = new BehaviorSubject<Family[]>([]);
  constructor() { }

  loadFamilies(userID: number): void {
    this.userFamilies.next([
      {
        id: 1,
        familyCode: '1234',
        members: [
          {
            id: 1,
            email: 'rec73@uakron.edu',
            firstName: 'Robert',
            lastName: 'Connolly',
          },
          {
            id: 2,
            email: 'jtc16@uakron.edu',
            firstName: 'James',
            lastName: 'Connolly',
          }
        ]
      }
    ]);
  }


  getFamilies(): BehaviorSubject<Family[]> {
    return this.userFamilies;
  }
}
