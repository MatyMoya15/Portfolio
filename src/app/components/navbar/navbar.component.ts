import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;
  isDarkTheme: boolean | undefined;

  constructor(private themeService: ThemeService, private renderer: Renderer2) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.isDarkTheme = theme === 'dark-theme';
      this.renderer.removeClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, theme);
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
