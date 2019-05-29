import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../__services__/artist.service';
import { Album } from '../../__models__/album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  albums: Album[] = [];
  imageUrl: string;
  artistsName: string;

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.retrieveArtist();
  }

  retrieveArtist(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.artistService.retrieveArtist(id)
      .subscribe(artist => {
        const { data: { imageUrl, name, albums } } = artist;
        this.imageUrl = imageUrl;
        this.artistsName = name;
        this.albums = albums;
      });
  }
}
