import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isLoggedIn: boolean = false;
  isUserMenuOpen: boolean = false;

  toggleMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
}
