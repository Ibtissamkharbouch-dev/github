import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GithubApiService } from 'src/app/services/github-api.service';
import * as UserActions from 'src/app/state/actions/user.actions';
import { UserState, UsersStateEnum } from 'src/app/state/reducers/user.reducer';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user$: Observable<UserState> = this.store.select(state => state.userState);
  readonly UsersStateEnum = UsersStateEnum;

  login:string|null;

  constructor(private store: Store<{ userState: UserState }>, private githubService: GithubApiService) {
    this.login = this.githubService.login;
  }

  ngOnInit(): void {
    if(this.login)
    this.store.dispatch(UserActions.loginUser({login:this.login}));
  }

}
