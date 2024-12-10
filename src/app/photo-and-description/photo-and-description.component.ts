import { Component } from '@angular/core';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';

@Component({
  selector: 'app-photo-and-description',
  standalone: true,
  imports: [ProfilePhotoComponent],
  templateUrl: './photo-and-description.component.html',
  styleUrl: './photo-and-description.component.css'
})
export class PhotoAndDescriptionComponent {

}
