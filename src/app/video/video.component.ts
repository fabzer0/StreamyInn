import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  songName: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getSongName();
  }

  getSongName() {
    const name = this.route.snapshot.paramMap.get('name');
    this.songName = name;
  }

  

}
