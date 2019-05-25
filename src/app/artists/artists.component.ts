import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../__services__/artists.service';
import { Artist } from '../__models__/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];
  displayText: string;

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    this.retrieveArtists();
  }

  retrieveArtists(): void {
    this.artistsService.retrieveArtists()
      .subscribe(artistsData => {
        const { success, message, data } = artistsData;
        if(success) {
          this.artists = data;
        } 
        this.displayText = message;
      });
  }

}
