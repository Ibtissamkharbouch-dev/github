import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../../state/actions/user.actions';
import * as RepositoryActions from '../../state/actions/repository.actions';
import { GithubApiService } from 'src/app/services/github-api.service';
import { Observable } from 'rxjs';
import { UserState, UsersStateEnum } from 'src/app/state/reducers/user.reducer';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name = new FormControl(null, [Validators.required]);

  login:string|null;
  login$= this.githubService.isLoggedIn$;

  user$: Observable<UserState> = this.store.select(state => state.userState);
  readonly UsersStateEnum = UsersStateEnum;


  constructor( private store: Store<{ userState: UserState }>, private githubService: GithubApiService, private router : Router) {
    this.login = this.githubService.login;
    console.log(this.login);

   }

  ngOnInit(): void {
  }

  loadUser() {
    console.log(this.name);
    if(!this.name.value) return;
    this.store.dispatch(UserActions.loadUser({login:this.name.value}));
    this.store.dispatch(RepositoryActions.loadRepositories({login: this.name.value}));
    this.name.reset();
  }

  logoutUser() {
    this.store.dispatch(UserActions.logoutUser());
    localStorage.removeItem('login');
    this.githubService.logout();
    this.router.navigate(['login'])
  }

}
