import { Component } from '@angular/core';
import { PhotoAndDescriptionComponent } from '../photo-and-description/photo-and-description.component';
import { SectionComponent } from '../section/section.component';
import { QualificationItemComponent } from '../qualification-item/qualification-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, PhotoAndDescriptionComponent, SectionComponent, QualificationItemComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  info = {
    biografy : {
      title: "//Biografia",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate  ipsum sem, sit amet aliquam tellus consectetur a. Nulla bibendum  ultricies leo, sed iaculis ligula elementum vitae. Sed sapien ex,  lacinia a efficitur eget, scelerisque nec nibh."
    },
    qualifications: {
      title: "//Formação",
      content: [
        {
          qualification: "Graduação em Sistemas e Mídias Digitais",
          institution: "Universidade Federal do Ceará",
          studyPeriod: "2018 - 2023"
        },
        {
          qualification: "Especialização em Engenharia de Software, DevOps e Computação em Núvem",
          institution: "Unifametro",
          studyPeriod: "2024 - Cursando"
        }
      ]
    },
    languages: {
      title: "//Linguas Faladas",
      content: [
        {
          language:"Português",
          level:"Fluente"
        },
        {
          language:"Inglês",
          level:"Intermediário"
        }
      ]
    }
  }
}
