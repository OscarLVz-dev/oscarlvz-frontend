import { Component, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'spotify-widget',
  templateUrl: './spotify-widget.component.html',
  styleUrls: ['./spotify-widget.component.scss']
})
export class SpotifyWidgetComponent {

  @Input()
  url:string;
  urlSafe: SafeResourceUrl;
  isLoading:Boolean = true;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
