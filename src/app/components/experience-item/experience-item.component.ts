import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-item.component.html',
  styleUrls: ['../qualification-item/qualification-item.component.css','./experience-item.component.css']
})
export class ExperienceItemComponent {

  @Input() experienceItem?: {
    position:string,
    description:string[],
    company:string,
    period:string
  }

  isOpen:Boolean = false

  invertState = () => this.isOpen = !this.isOpen
}
