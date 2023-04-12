import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RepositoryState } from 'src/app/state/reducers/repository.reducer';
import { Observable } from 'rxjs';
import * as RepositoryActions from 'src/app/state/actions/repository.actions';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  login:string|null;

  repositories$:Observable<RepositoryState> = this.store.select(state => state.repositoryState);

  constructor(private store: Store<{repositoryState: RepositoryState}>, private githubService: GithubApiService) {
    this.login = this.githubService.login;
  }

  ngOnInit(): void {
    if(this.login)
    this.store.dispatch(RepositoryActions.loadRepositories({login: this.login}));
  }

  getRepository(name:string) {
    if(this.login)
    this.store.dispatch(RepositoryActions.loadRepository({login: this.login, repository:name}))
  }

}
