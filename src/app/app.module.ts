import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { WidgetsListComponent } from './components/pages/widgets-list/widgets-list.component';
import { NavbarComponent } from './components/commons/navbar/navbar.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { InstagramWidgetComponent } from './components/commons/widgets/instagram-widget/instagram-widget.component';
import { SpotifyWidgetComponent } from './components/commons/widgets/spotify-widget/spotify-widget.component';
import { GoogleMapsWidgetComponent } from './components/commons/widgets/google-maps-widget/google-maps-widget.component';
import { GoogleCalendarWidgetComponent } from './components/commons/widgets/google-calendar-widget/google-calendar-widget.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    WidgetsListComponent,
    NavbarComponent,
    ProjectsComponent,
    InstagramWidgetComponent,
    SpotifyWidgetComponent,
    GoogleMapsWidgetComponent,
    GoogleCalendarWidgetComponent,
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
