import { UserPlayerService } from '../user-player.service';
import { EchoesState } from '@core/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'playlists',
  template: './playlists.component.html'
})
export class PlaylistsComponent implements OnInit {
  playlists$ = this.store.select(state => state.user.playlists);

  constructor(
    private store: Store<EchoesState>,
    private userPlayerService: UserPlayerService
  ) { }

  ngOnInit() { }

  playSelectedPlaylist(playlist: GoogleApiYouTubePlaylistResource) {
    this.userPlayerService.playSelectedPlaylist(playlist);
  }

  queueSelectedPlaylist(playlist: GoogleApiYouTubePlaylistResource) {
    this.userPlayerService.queuePlaylist(playlist);
  }
}
