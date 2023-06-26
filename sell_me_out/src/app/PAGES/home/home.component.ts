import { Component } from '@angular/core';
import { ConnectionService } from 'src/app/SERVICES/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private connection: ConnectionService) {}

  disconnect() {
    this.connection.logout();
  }
}
