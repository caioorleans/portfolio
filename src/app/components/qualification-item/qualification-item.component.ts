import { Component, Input } from '@angular/core';
import { ItemQualificationList } from '../../model/item-qualification-list.model'

@Component({
  selector: 'app-qualification-item',
  standalone: true,
  imports: [],
  templateUrl: './qualification-item.component.html',
  styleUrl: './qualification-item.component.css'
})
export class QualificationItemComponent {
  @Input() qualification?:ItemQualificationList
}
