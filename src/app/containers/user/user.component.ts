import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { EchoesState } from '@core/store';

import * as UserProfile from '@core/store/user-profile/user-profile.selectors';
import { AppApi } from '@api/app.api';

@Component({
  selector: 'app-user',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./user.component.scss'],
  template: './user.component.html'
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
