import { Component, HostListener } from '@angular/core';
import { ContentComponent } from './components/content/content.component';
import { CommonModule} from '@angular/common';
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
