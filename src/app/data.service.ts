import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  userDataSource = new BehaviorSubject<Array<any>>([]);

  userData = this.userDataSource.asObservable();

  updateUserData(data) {
    this.userDataSource.next(data);
  }
}
