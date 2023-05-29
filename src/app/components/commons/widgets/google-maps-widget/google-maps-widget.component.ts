import { Component, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'google-maps-widget',
  templateUrl: './google-maps-widget.component.html',
  styleUrls: ['./google-maps-widget.component.scss']
})
export class GoogleMapsWidgetComponent {

  @Input()
  url:string;
  urlSafe: SafeResourceUrl;
  isLoading:Boolean = true;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
