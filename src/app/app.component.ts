import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Task';
  logout_url = "https://admin.creatorclasses.co/api/v1/user/logout/"
}
