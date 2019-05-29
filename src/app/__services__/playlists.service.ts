import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  albumUrl: string;
  httpOptions: object;

  constructor(private http: HttpClient) { 
    this.albumUrl = `${environment.microSpotifyBackendUrl}/albums`;
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  retrieveAlbum(id: number): Observable<any> {
    const url = `${this.albumUrl}/?id=${id}`;
    return this.http.get(url, this.httpOptions);
  }
}
