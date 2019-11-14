import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CSearchTypes } from '@core/store/player-search';

@Component({
  selector: 'search-navigator',
  styleUrls: ['./search-navigator.component.scss'],
  templateUrl: './search-navigator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchNavigatorComponent implements OnInit {
  searchTypes = [
    { label: 'Videos', link: '/search/videos', type: CSearchTypes.VIDEO },
    { label: 'Playlists', link: '/search/playlists', type: CSearchTypes.PLAYLIST },
  ];

  ngOnInit() { }
}
