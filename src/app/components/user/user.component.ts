import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState, UsersStateEnum } from 'src/app/state/reducers/user.reducer';
import { RepositoryState, RepositoriesStateEnum } from 'src/app/state/reducers/repository.reducer';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<UserState> = this.store.select(state => state.userState);
  repositories$:Observable<RepositoryState> = this.store.select(state => state.repositoryState);

  readonly UsersStateEnum = UsersStateEnum;
  readonly RepositoriesStateEnum = RepositoriesStateEnum;

  constructor(private store: Store<{ userState: UserState, repositoryState: RepositoryState }>) { }

  ngOnInit(): void {
  }


}
