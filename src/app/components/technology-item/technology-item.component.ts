import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology-item.component.html',
  styleUrl: './technology-item.component.css'
})
export class TechnologyItemComponent {

  @Input()
  technologies: {
    icons: {
      path:string,
      description:string
    }[],
    description: string
  } | undefined
}
