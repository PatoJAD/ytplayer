import { AppApi } from '@api/app.api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  styleUrls: ['./app-brand.component.scss'],
  templateUrl: './app-brand.component.html'
})
export class AppBrandComponent implements OnInit {
  constructor(private appApi: AppApi) {}
  ngOnInit() {}

  toggleSidebar() {
    return this.appApi.toggleSidebar();
  }
}
