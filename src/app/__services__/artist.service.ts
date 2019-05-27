import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  artistUrl: string;
  httpOptions: object;

  constructor(private http: HttpClient) {
    this.artistUrl = `${environment.microSpotifyBackendUrl}/artists`;
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  retrieveArtist(id: number): Observable<any> {
    const url = `${this.artistUrl}/?id=${id}`;
    return this.http.get(url, this.httpOptions);
  }
}
