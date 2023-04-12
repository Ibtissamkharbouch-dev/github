import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState, UsersStateEnum } from 'src/app/state/reducers/user.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<UserState> = this.store.select(state => state.userState);
  readonly UsersStateEnum = UsersStateEnum;

  constructor(private store: Store<{ userState: UserState }>) { }

  ngOnInit(): void {
  }

}
