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

  currentSection?: string = 'about-me';

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = document.querySelectorAll('.section');
    let foundSection = this.currentSection ? this.currentSection : 'about-me'; // Default
    const viewportMiddle = window.innerHeight / 2;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2; // Ponto central da seção

      // Verifica se o centro da seção está próximo do meio do viewport
      if (rect.bottom >= viewportMiddle - 10 && rect.top <= viewportMiddle + 10) {
        foundSection = section.id;
      }
    });

    this.currentSection = foundSection;
    console.log(this.currentSection)
  }

  changeMenuState(){
    this.showMenu = !this.showMenu
  }
}
