import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/common/authService/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() searchbar = false;
  statusMenu: boolean = false;

  constructor(private authService: AuthService) {}

  openMenu() {
    this.statusMenu = !this.statusMenu;
  }

  logOut() {
    this.authService.logOut();
  }
}
