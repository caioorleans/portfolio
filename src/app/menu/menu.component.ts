import { Component } from '@angular/core';
import { ProfilePhotoComponent } from '../photo-and-description/profile-photo/profile-photo.component';
import { PhotoAndDescriptionComponent } from '../photo-and-description/photo-and-description.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PhotoAndDescriptionComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
