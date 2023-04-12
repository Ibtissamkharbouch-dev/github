import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RepositoryState } from 'src/app/state/reducers/repository.reducer';

@Component({
  selector: 'app-repository-statistics',
  templateUrl: './repository-statistics.component.html',
  styleUrls: ['./repository-statistics.component.scss']
})
export class RepositoryStatisticsComponent implements OnInit {

  repository$: Observable<RepositoryState> = this.store.select(state => state.repositoryState);

  constructor(private store: Store<{repositoryState: RepositoryState}>) { }

  ngOnInit(): void {
  }

}
