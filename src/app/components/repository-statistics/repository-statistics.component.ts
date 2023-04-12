import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RepositoriesStateEnum, RepositoryState } from 'src/app/state/reducers/repository.reducer';

@Component({
  selector: 'app-repository-statistics',
  templateUrl: './repository-statistics.component.html',
  styleUrls: ['./repository-statistics.component.scss']
})
export class RepositoryStatisticsComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  readonly RepositoriesStateEnum = RepositoriesStateEnum;

  repository$: Observable<RepositoryState> = this.store.select(state => state.repositoryState);

  constructor(private store: Store<{repositoryState: RepositoryState}>) { }

  ngOnInit(): void {
  }

}
