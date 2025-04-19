import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef<HTMLAudioElement>;

  ngOnInit(): void {
    this.audioPlayer.nativeElement.play();
  }
}
