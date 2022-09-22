/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css']
})
export class ThemeSelectorComponent implements OnInit {
  localStorage = window.localStorage;
  root = document.documentElement;
  isDark: boolean = this.localStorage.getItem('isDark') === "true";
  iconClass = "fa-moon";

  constructor() { }

  ngOnInit(): void {
    if (this.isDark) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  toggleTheme(): void {
    if (this.isDark) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
    this.isDark = !this.isDark;
    localStorage.setItem('isDark', this.isDark.toString());
  }

  setDarkTheme(): void {
    this.root.style.setProperty('--bg-site-g', '#333');
    this.root.style.setProperty('--bg-site', "#222");
    this.root.style.setProperty('--bg-site-2', "#111");
    this.root.style.setProperty('--bg-site-3', "rgba(80, 80, 80, 0.1)");
    this.root.style.setProperty('--text-color', "rgba(240, 240, 240, 0.95)");
    this.root.style.setProperty('--text-title', "#999");
    this.iconClass = "fa-sun";
  }

  setLightTheme(): void {
    this.root.style.setProperty('--bg-site-g', '#fff');
    this.root.style.setProperty('--bg-site', "#3763EB");
    this.root.style.setProperty('--bg-site-2', "#EFF2F9");
    this.root.style.setProperty('--bg-site-3', "rgba(106, 124, 146, 0.1)");
    this.root.style.setProperty('--text-color', "rgba(106, 124, 146, 0.95)");
    this.root.style.setProperty('--text-title', "#051441");
    this.iconClass = "fa-moon";
  }
}