import { Component, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'instagram-widget',
  templateUrl: './instagram-widget.component.html',
  styleUrls: ['./instagram-widget.component.scss']
})
export class InstagramWidgetComponent {

  @Input()
  url:string;
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
