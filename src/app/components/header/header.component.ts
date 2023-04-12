import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../../state/actions/user.actions';
import * as RepositoryActions from '../../state/actions/repository.actions';
import { GithubApiService } from 'src/app/services/github-api.service';
import { Observable, tap } from 'rxjs';
import { UserState } from 'src/app/state/reducers/user.reducer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login:string|null;

  constructor( private store: Store, private githubService: GithubApiService, private router : Router) {
    this.login = this.githubService.login;
    console.log('login-user');
    console.log(this.githubService.login);
   }

  ngOnInit(): void {
  }

  getUserFollowers() {
    if(this.login)
    this.store.dispatch(UserActions.loadFollowers({login: this.login}));
  }

  getUserRepositories() {
    if(this.login)
    this.store.dispatch(RepositoryActions.loadRepositories({login: this.login}));
  }

  logoutUser() {
    this.store.dispatch(UserActions.logoutUser());
    localStorage.removeItem('login');
    this.router.navigate(['login'])
  }

}
