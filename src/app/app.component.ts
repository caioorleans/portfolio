import { AfterViewInit, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { ContentComponent } from './components/content/content.component';
import { CommonModule, isPlatformBrowser} from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MenuComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  
  title = 'portfolio';

  showMenu = false;

  currentSection?: string = 'about-me';

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    if(isPlatformBrowser(this.platformId)){
      document.querySelectorAll('.animatable').forEach((item)=>{    
        ScrollTrigger.create({
          trigger: item,
          start: 'bottom 60px', // Quando o item está perto da saída da tela
          end: 'bottom 40px', // Quando já saiu completamente
          scrub: true, // Faz a animação ser sincronizada com o scroll
          onUpdate: (self) => {
            const progress = self.progress; // Progresso da saída
            gsap.to(item, {
              alpha: 1 - progress, // Reduz a opacidade gradualmente
              y: -25 * progress, // Move o item para cima proporcionalmente
              overwrite: 'auto', // Evita conflitos de animação
            });
          },
        });
      })
    }
  }

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
