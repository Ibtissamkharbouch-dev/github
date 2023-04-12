import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { UserState, UsersStateEnum } from 'src/app/state/reducers/user.reducer';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  user$: Observable<UserState> = this.store.select(state => state.userState);
  readonly UsersStateEnum = UsersStateEnum;

  constructor(private store: Store<{ userState: UserState }>) { }

  ngOnInit(): void {

    console.log('user');

    // this.user$.pipe(
    //   map( (data: any) => {console.log(data);
    //   })
    // ).subscribe();
  }

}
