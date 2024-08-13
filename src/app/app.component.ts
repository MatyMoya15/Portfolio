import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ThemeService } from './services/theme.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, ProjectsComponent, AboutMeComponent, NavbarComponent, FooterComponent]
})
export class AppComponent {
    title = 'portfolio';

    constructor(private themeService: ThemeService) { }

    ngOnInit() {
        this.themeService.theme$.subscribe(theme => {
            this.applyTheme(theme);
        });
    }

    private applyTheme(theme: string) {
        const element = document.getElementsByTagName('body')[0];
        element.className = theme; // Aplica la clase del tema al body o a un elemento raíz
    }
    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
