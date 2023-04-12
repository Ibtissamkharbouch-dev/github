import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FollowerListComponent } from './components/follower-list/follower-list.component';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { RepositoryStatisticsComponent } from './components/repository-statistics/repository-statistics.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RepositoryEffects } from './state/effects/repository.effects';
import { UserEffects } from './state/effects/user.effects';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { userReducer } from './state/reducers/user.reducer';
import { repositoryReducer } from './state/reducers/repository.reducer';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowerListComponent,
    RepositoryListComponent,
    RepositoryStatisticsComponent,
    UserProfileComponent,
    HeaderComponent,
    UserLoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    StoreModule.forRoot({userState: userReducer, repositoryState: repositoryReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([RepositoryEffects, UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
