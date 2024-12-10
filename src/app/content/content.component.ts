import { Component } from '@angular/core';
import { PhotoAndDescriptionComponent } from "../photo-and-description/photo-and-description.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PhotoAndDescriptionComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
