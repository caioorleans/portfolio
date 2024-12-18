import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MenuComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  showMenu = false;

  changeMenuState(){
    this.showMenu = !this.showMenu
  }
}
