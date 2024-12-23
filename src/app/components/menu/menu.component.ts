import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PhotoAndDescriptionComponent } from '../photo-and-description/photo-and-description.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,PhotoAndDescriptionComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() emitterCloseMenu = new EventEmitter<void>();
  @Input() isMenuActive?:Boolean;
  @Input() activeSection?:String;

  notifyCloseMenu(){
    this.emitterCloseMenu.emit();
  }
}
