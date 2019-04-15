import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isCollapsed = false;
  title = 'angular';
  appDate = new Date(2018, 5, 25);
  datetime = '2019/01/20 9:40am';
}
