import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FollowerListComponent } from './components/follower-list/follower-list.component';
import { RepositoryStatisticsComponent } from './components/repository-statistics/repository-statistics.component';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'user-profile', pathMatch:'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'followers', component: FollowerListComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'repositories', component: RepositoryListComponent, canActivate: [AuthGuard]},
  {path: 'repository', component: RepositoryStatisticsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
