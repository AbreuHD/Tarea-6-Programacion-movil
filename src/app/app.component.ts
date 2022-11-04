import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navaja Suiza', url: '/navaja', icon: 'mail' },
    { title: 'Genero', url: '/genero', icon: 'paper-plane' },
    { title: 'Edad', url: '/age', icon: 'heart' },
    { title: 'Universidades', url: '/universidades', icon: 'archive' },
    { title: 'Clima', url: '/clima', icon: 'trash' },
    { title: 'Contratame', url: '/contratame', icon: 'warning' },
  ];
  constructor() {}
}
