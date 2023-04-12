import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RepositoryState } from 'src/app/state/reducers/repository.reducer';
import { Observable } from 'rxjs';
import * as RepositoryActions from 'src/app/state/actions/repository.actions';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  login:string;

  repositories$:Observable<RepositoryState> = this.store.select(state => state.repositoryState);

  constructor(private store: Store<{repositoryState: RepositoryState}>) {
    this.login = 'user';
  }

  ngOnInit(): void {
  }

  getRepository(name:string) {
    this.store.dispatch(RepositoryActions.loadRepository({login: this.login, repository:name}))
  }

}
