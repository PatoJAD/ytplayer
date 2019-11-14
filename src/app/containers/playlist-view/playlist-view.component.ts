import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistProxy } from './playlist-view.proxy';

@Component({
  selector: 'playlist-view',
  styleUrls: ['./playlist-view.component.scss'],
  template: './playlist-view.component.html'
})
export class PlaylistViewComponent implements OnInit {
  playlist$ = this.playlistProxy.fetchPlaylist(this.route);
  videos$ = this.playlistProxy.fetchPlaylistVideos(this.route);
  header$ = this.playlistProxy.fetchPlaylistHeader(this.route);
  nowPlaylistIds$ = this.playlistProxy.nowPlaylistIds$;

  constructor(
    private playlistProxy: PlaylistProxy,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  playPlaylist(playlist: GoogleApiYouTubePlaylistResource) {
    this.playlistProxy.playPlaylist(playlist);
  }

  queuePlaylist(playlist: GoogleApiYouTubePlaylistResource) {
    this.playlistProxy.queuePlaylist(playlist);
  }

  queueVideo(media: GoogleApiYouTubeVideoResource) {
    this.playlistProxy.queueVideo(media);
  }

  playVideo(media: GoogleApiYouTubeVideoResource) {
    this.playlistProxy.playVideo(media);
  }

  unqueueVideo(media: GoogleApiYouTubeVideoResource) {
    this.playlistProxy.unqueueVideo(media);
  }

  handleBack() {
    this.playlistProxy.goBack();
  }
}
