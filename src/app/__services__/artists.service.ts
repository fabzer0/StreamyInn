import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  artistsUrl: string;
  httpOptions: object;

  constructor(private http: HttpClient) {
    this.artistsUrl = `${environment.microSpotifyBackendUrl}/artists`;
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  retrieveArtists(): Observable<any> {
    const url = this.artistsUrl;
    return this.http.get(url, this.httpOptions);
  }
}
