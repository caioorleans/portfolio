import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: '../qualification-item/qualification-item.component.css'
})
export class ExperienceItemComponent {

  @Input() experienceItem?: {
    position:string,
    description:string,
    company:string,
    period:string
  }
}
