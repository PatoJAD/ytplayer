import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { EchoesState } from '@core/store';

import * as UserProfile from '@core/store/user-profile/user-profile.selectors';
import { AppApi } from '@api/app.api';

@Component({
  selector: 'app-user',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./user.scss'],
  template: `
  <article>
    <app-navbar
      [header]="'Mi Perfik - Mis Playlists'"
      [headerIcon]="'heart-o'"
    ></app-navbar>
    <p *ngIf="!(isSignedIn$ | async)" class="well lead">
      Para ver Tus Play List deberas iniciar sesion
      <button class="btn btn-lg btn-primary"
        (click)="signInUser()">
        <icon name="google"></icon> Ingresar
      </button>
    </p>
    <router-outlet></router-outlet>
  </article>
  `
})
export class UserComponent implements OnInit {
  playlists$ = this.store.select(UserProfile.getUserPlaylists);
  currentPlaylist$ = this.store.select(UserProfile.getUserViewPlaylist);
  isSignedIn$ = this.store.select(UserProfile.getIsUserSignedIn);

  constructor(private appApi: AppApi, public store: Store<EchoesState>) {}

  ngOnInit() {}

  signInUser() {
    this.appApi.signinUser();
  }
}
