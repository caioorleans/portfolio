import { Component, EventEmitter, Output } from '@angular/core';
import { PhotoAndDescriptionComponent } from '../photo-and-description/photo-and-description.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PhotoAndDescriptionComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() emitterCloseMenu = new EventEmitter<void>();

  notifyCloseMenu(){
    this.emitterCloseMenu.emit();
  }
}
