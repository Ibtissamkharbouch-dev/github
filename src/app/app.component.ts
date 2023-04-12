import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import { AppState } from './state/app.state';
import { User } from './models/user.model';
// import { getError } from './state/selectors/error.selectors';
// import { getUser, getUserLoading } from './state/selectors/user.selectors';
// import { SearchUsers } from './state/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gitHub-profile';
  searchQuery!: string;
  user$!: Observable<User>;
  userLoading$!: Observable<boolean>;
  error$!: Observable<string>;
  constructor() {}

  // constructor(private store: Store<AppState>) {
  //   this.user$ = this.store.select(getUser);
  //   this.userLoading$ = this.store.select(getUserLoading);
  //   this.error$ = this.store.select(getError);
  // }

  // searchUser() {
  //   if (this.searchQuery) {
  //     this.store.dispatch(new SearchUsers(this.searchQuery));
  //   }
  // }
}
