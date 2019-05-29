import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistsService } from '../__services__/playlists.service';
import { Songs } from '../__models__/songs';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  songs: Songs[] = [];
  artists: string;
  imageUrl: string;

  constructor(
    private playlistsService: PlaylistsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.retrieveAlbum();
  }

  retrieveAlbum(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playlistsService.retrieveAlbum(id)
      .subscribe(album => {
        const { data: { songs, owner: { name, imageUrl } } } = album;
        this.songs = songs;
        this.artists = name;
        this.imageUrl = imageUrl;
      });
  }
}
