import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme = new BehaviorSubject<string>(this.getInitialTheme());
  theme$ = this._theme.asObservable();

  constructor() {}

  toggleTheme() {
    this._theme.next(this._theme.value === 'light-theme' ? 'dark-theme' : 'light-theme');
  }

  private getInitialTheme(): string {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkScheme ? 'dark-theme' : 'light-theme';
  }
}
