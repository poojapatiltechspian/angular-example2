import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#455363',
  'background-color': '#1f2935',
  'text-color': '#fff'
};
export const lightTheme = {
  'primary-color': '#fff',
  'background-color': '#fff',
  'text-color': '#2d2d2d'
};
@Injectable({ providedIn: 'root' })

export class ThemeService {
  toggleDark(): any {
    this.setTheme(darkTheme);
  }
  toggleLight(): any {
    this.setTheme(lightTheme);
  }
  private setTheme(theme: {}): any {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
