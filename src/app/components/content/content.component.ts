import { Component } from '@angular/core';
import { PhotoAndDescriptionComponent } from '../photo-and-description/photo-and-description.component';
import { SectionComponent } from '../section/section.component';
import { QualificationItemComponent } from '../qualification-item/qualification-item.component';
import { CommonModule } from '@angular/common';
import { ExperienceItemComponent } from "../experience-item/experience-item.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    PhotoAndDescriptionComponent, 
    SectionComponent, 
    QualificationItemComponent, 
    ExperienceItemComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  info = {
    biografy : {
      title: "Biografia",
      content: [
        "Me chamo Caio Orleans, tenho 28 anos e sou de Fortaleza/CE. Meu primeiro contato com a programação foi em 2015, quando ingressei no curso de Matemática Industrial, pela Universidade Federal do Ceará (UFC).",
        "Três anos depois, iniciei o curso de Sistemas e Mídias Digitais, também da UFC, no qual tive maior contato com a programação em forma midiática, seja através da criação de sites, jogos, aplicativos e sistemas digitais.",
        "Nesses quase 10 anos, tive a oportunidade de trabalhar como desenvolvedor Front-End em dois projetos da UFC, como desenvolvedor Back-End em um projeto em parceria com a Prefeitura de Fortaleza e como desenvolvedor Mobile no Instituto Irede."
      ]
    },
    qualifications: {
      title: "Formação",
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
      title: "Linguas Faladas",
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
    },
    experiences: {
      title: "Experiências Profissionais",
      content: [
        {
          position: "Bolsista desenvolvedor front-end no projeto Athena",
          company: "Universidade Federal do Ceará",
          description: "Blb bla bla bla bla",
          period: "2020 - 2023"
        },
        {
          position: "Bolsista desenvolvedor front-end no projeto Athena",
          company: "Universidade Federal do Ceará",
          description: "Blb bla bla bla bla",
          period: "2020 - 2023"
        },
        {
          position: "Bolsista desenvolvedor front-end no projeto Athena",
          company: "Universidade Federal do Ceará",
          description: "Blb bla bla bla bla",
          period: "2020 - 2023"
        }
      ]
    }
  }
}
