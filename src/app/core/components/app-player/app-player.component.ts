import { NowPlaylistEffects } from '@core/effects/now-playlist.effects';
import * as AppPlayer from '@store/app-player';
import * as NowPlaylist from '@store/now-playlist/now-playlist.selectors';
import { EchoesState } from '@store/reducers';
import { Store } from '@ngrx/store';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  OnDestroy,
  Output
} from '@angular/core';

import { NowPlaylistService } from '@core/services';
import { AppPlayerApi } from '@api/app-player.api';

@Component({
  selector: 'app-player',
  styleUrls: ['./app-player.component.scss'],
  templateUrl: './app-player.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPlayerComponent implements OnInit, OnDestroy {
  player$ = this.store.select(AppPlayer.getPlayer);
  media$ = this.store.select(AppPlayer.getCurrentMedia);
  isPlayerPlaying$ = this.store.select(AppPlayer.getIsPlayerPlaying);
  isPlayerInRepeat$ = this.store.select(NowPlaylist.isPlayerInRepeat);
  isPlayerFullscreen$ = this.store.select(AppPlayer.getPlayerFullscreen);
  isShowPlayer$ = this.store.select(AppPlayer.getShowPlayer);

  @HostBinding('class.youtube-player') style = true;

  constructor(
    private nowPlaylistService: NowPlaylistService,
    private store: Store<EchoesState>,
    private nowPlaylistEffects: NowPlaylistEffects,
    private appPlayerApi: AppPlayerApi
  ) {}

  ngOnInit() {
    this.appPlayerApi.resetPlayer();
    this.nowPlaylistEffects.loadNextTrack$.subscribe(action =>
      this.playVideo(action.payload)
    );
  }

  ngOnDestroy() {}

  setupPlayer(player) {
    this.appPlayerApi.setupPlayer(player);
  }

  updatePlayerState(event) {
    this.appPlayerApi.changePlayerState(event);
  }

  playVideo(media: GoogleApiYouTubeVideoResource) {
    this.appPlayerApi.playVideo(media);
  }

  pauseVideo() {
    this.appPlayerApi.pauseVideo();
  }

  togglePlayer() {
    this.appPlayerApi.togglePlayer();
  }

  toggleFullScreen() {
    this.appPlayerApi.toggleFullScreen();
  }

  playNextTrack() {
    this.nowPlaylistService.selectNextIndex();
    this.playVideo(this.nowPlaylistService.getCurrent());
  }

  playPreviousTrack() {
    this.nowPlaylistService.selectPreviousIndex();
    this.playVideo(this.nowPlaylistService.getCurrent());
  }

  toggleRepeat() {
    this.appPlayerApi.toggleRepeat();
  }

  selectTrackInVideo(trackEvent: {
    time: string;
    media: GoogleApiYouTubeVideoResource;
  }) {
    this.playVideo(trackEvent.media);
    this.nowPlaylistService.seekToTrack(trackEvent);
  }
}
