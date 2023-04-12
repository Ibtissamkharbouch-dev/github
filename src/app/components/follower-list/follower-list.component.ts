import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GithubApiService } from 'src/app/services/github-api.service';
import { UserState } from 'src/app/state/reducers/user.reducer';
import * as UserActions from 'src/app/state/actions/user.actions';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.scss']
})

export class FollowerListComponent implements OnInit {
  followers$:Observable<UserState> = this.store.select(state => state.userState);

  login:string|null;

  constructor(private store: Store<{userState: UserState}>, private githubService: GithubApiService) {
    this.login = this.githubService.login;
   }

  ngOnInit(): void {
    if(this.login)
    this.store.dispatch(UserActions.loadFollowers({login: this.login}));
  }


}
