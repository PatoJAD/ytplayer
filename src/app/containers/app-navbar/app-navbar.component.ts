import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

import { Authorization } from '@core/services';
import { EchoesState } from '@core/store';
import { AppApi } from '@api/app.api';

@Component({
  selector: 'app-navbar',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app-navbar.component.scss'],
  templateUrl: './app-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavbarComponent implements OnInit {
  user$ = this.appApi.user$;
  appVersion$ = this.appApi.appVersion$;
  themes$ = this.appApi.themes$;

  @Input() header: string;
  @Input() headerIcon = '';
  @Input() mainIcon = '';

  @Output() signIn = new EventEmitter();
  @Output() signOut = new EventEmitter();
  @Output() headerMainIconClick = new EventEmitter();

  constructor(private authorization: Authorization, private appApi: AppApi) {}

  ngOnInit() {}

  signInUser() {
    this.appApi.signinUser();
    this.signIn.next();
  }

  signOutUser() {
    this.appApi.signoutUser();
    this.signOut.next();
  }

  isSignIn() {
    return this.authorization.isSignIn();
  }

  updateVersion() {
    this.appApi.updateVersion();
  }

  checkVersion() {
    this.appApi.checkVersion();
  }

  handleMainIconClick() {
    this.headerMainIconClick.emit();
  }

  changeTheme(theme) {
    this.appApi.changeTheme(theme.value);
  }
}
