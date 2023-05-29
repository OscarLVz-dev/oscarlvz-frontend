import { Component, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'google-calendar-widget',
  templateUrl: './google-calendar-widget.component.html',
  styleUrls: ['./google-calendar-widget.component.scss']
})
export class GoogleCalendarWidgetComponent {

  @Input()
  url: string;
  urlSafe: SafeResourceUrl;
  isLoading: Boolean = true;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
