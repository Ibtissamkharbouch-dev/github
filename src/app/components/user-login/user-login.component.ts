import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserActions from '../../state/actions/user.actions';
import { UserState } from 'src/app/state/reducers/user.reducer';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  name = new FormControl('', [Validators.required]);

  constructor(private store: Store<{ userState: UserState }>) {}

  ngOnInit(): void {}

  loginUser() {
    this.store.dispatch(UserActions.loginUser({login:this.name.value}));
  }

}
