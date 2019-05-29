import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'albums/:id', component: PlaylistsComponent },
  { path: 'v/:name', component: VideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
