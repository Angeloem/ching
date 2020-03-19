import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.scss'],
})
export class LauncherComponent implements OnInit {
  icon: string;

  constructor() { }

  ngOnInit() {
    this.icon = '/assets/icon/splash.png';
  }

}
