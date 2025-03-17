import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-item.component.html',
  styleUrls: ['../qualification-item/qualification-item.component.css','./project-item.component.css']
})
export class ProjectItemComponent{
  @Input()
  item:{title:string, description:string, image:string, technologies:string[], links: {site?:string, repository:string}} | undefined

  openSite(url?:string){
    window.open(url, '_blank');
  }
}
