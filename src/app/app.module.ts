import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArtistsComponent,
    ArtistComponent,
    PlaylistsComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
