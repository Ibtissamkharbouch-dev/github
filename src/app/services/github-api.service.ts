import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  usersUrl:string = `${environment.host}/users`;
  repoUrl:string = `${environment.host}/repos`;

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get login(): string|null {
    return localStorage.getItem('login');
  }

  constructor(private httpClient: HttpClient) {
    this._isLoggedIn$.next(!!this.login);
  }

  getLogin(): string | null {
    return localStorage.getItem('login');
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersUrl);
  }

  getUserProfile(login: string): Observable<User> {
    return this.httpClient.get<User>(`${this.usersUrl}/${login}`);
  }

  getUserRepositories(login: string): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(`${this.usersUrl}/${login}/repos`);
  }

  getUserfollowers(login: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.usersUrl}/${login}/followers`);
  }

  getUserRepository(login: string, repoName: string):Observable<Repository> {
    return this.httpClient.get<Repository>(`${this.repoUrl}/${login}/${repoName}`);
  }

  loginUser(){
    this._isLoggedIn$.next(true);
  }
  logout(){
    this._isLoggedIn$.next(false);
  }

}
