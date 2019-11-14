import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppSidebarProxy } from './app-sidebar.proxy';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./app-sidebar.component.scss'],
  templateUrl: './app-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSidebarComponent {
  sidebarCollapsed$ = this.appSidebarProxy.sidebarCollapsed$;
  searchType$ = this.appSidebarProxy.searchType$;

  constructor(private appSidebarProxy: AppSidebarProxy) { }

  toggleSidebar() {
    this.appSidebarProxy.toggleSidebar();
  }
}
