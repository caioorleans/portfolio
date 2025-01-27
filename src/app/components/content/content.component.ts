import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { PhotoAndDescriptionComponent } from '../photo-and-description/photo-and-description.component';
import { SectionComponent } from '../section/section.component';
import { QualificationItemComponent } from '../qualification-item/qualification-item.component';
import { CommonModule } from '@angular/common';
import { ExperienceItemComponent } from "../experience-item/experience-item.component";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    PhotoAndDescriptionComponent, 
    SectionComponent, 
    QualificationItemComponent, 
    ExperienceItemComponent,
    ProjectsComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  htmlContent: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    const rawHtml = '';
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
  }

  info = {
    biografy : {
      title: "Sobre mim",
      content: [
        "Me chamo Caio Orleans, tenho 28 anos e sou de Fortaleza, Ceará. Meu primeiro contato com a programação foi em 2018, ao ingressar no curso de Sistemas e Mídias Digitais na Universidade Federal do Ceará (UFC).",
        "Tal curso me proporcionou uma base sólida em desenvolvimento de sistemas web, mobile e jogos, além de expandir minhas habilidades para áreas além da programação, como design gráfico, UX/UI, modelagem 3D, entre outras.",
        "Atualmente curso especialização em Engenharia de Software, DevOps e Computação em Núvem pela Unifametro e estou no quarto período do curso de Lingua Inglesa da Casa de Cultura Britânica."
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
          position: "Bolsista desenvolvedor front-end nos projetos Athena e Aprendizagem Móvel e Colaborativa no Ensino Fundamental",
          company: "Universidade Federal do Ceará",
          description: [
            "Neste projeto, colaborei com professores e demais bolsistas no desenvolvimento de funcionalidades para o Athena, um repositório de Recursos Educacionais Digitais (RED) voltado para professores e alunos do ensino fundamental. O repositório foi desenvolvido inteiramente com tecnologias de front-end web, como HTML, CSS e JavaScript, além do uso de frameworks e bibliotecas como Bootstrap e jQuery.",
            "Minha principal contribuição foi a aplicação dessas tecnologias, juntamente com técnicas de UI/UX, para implementar novas funcionalidades no repositório, garantindo uma experiência mais intuitiva e eficiente para os usuários.",
            "Além das atividades técnicas, também participei de atividades acadêmicas, incluindo a escrita de artigos, apresentações em palestras e oficinas. Essas experiências me permitiram desenvolver soft skills, especialmente relacionadas à oratória e comunicação."
          ],
          period: "2020 - 2023"
        },
        {
          position: "Bolsista desenvolvedor back-end no projeto Juventude Digital na Prática",
          company: "Casa da Cultura Digital",
          description: [
            "Neste projeto, colaborei com minha equipe em diversas etapas do desenvolvimento do produto, assim ajudando a identificar as principais necessidades do cliente, elencar os requisitos do sistema, elaborar a sua arquitetura, entre outros.",
            "Entretanto, minha maior contribuição para o projeto foi como desenvolvedor back-end da aplicação, no qual utilizamos NestJs para a criação da API, acompanhada da dependência Prisma ORM para mapeamento das entidades e comunicação com banco de dados, MariaDB para a persistência de dados, AWS para deploy e hospedagem, entre outras tecnologias.",
            "Como resultado do desenvolvimento, temos um sistema robusto que permite o cadastro e autenticação de usuários, registro das atividades dos mesmos e geração de relatórios."
          ],
          period: "2023"
        },
        {
          position: "Residente em desenvolvimento Android",
          company: "Instituto Irede",
          description: [
            "Durante a residência, colaborei com a equipe no desenvolvimento de um aplicativo Android utilizando Kotlin e Jetpack Compose, desde a concepção até a entrega do produto final. O aplicativo foi projetado para atender às necessidades dos usuários finais e oferecer uma experiência intuitiva e eficiente.",
            "Minhas principais contribuições incluíram a implementação de funcionalidades como autenticação de usuários, exibição de vídeo aulas, visualização de materiais de apoio em PDF e download de certificados. Utilizamos o Retrofit para comunicação com APIs e o Koin como gerenciador de dependências, garantindo um código limpo e modular.",
            "Além disso, participei ativamente do processo de desenvolvimento ágil, utilizando metodologias como Scrum e Kanban para planejar, priorizar e acompanhar as tarefas, promovendo uma colaboração eficiente dentro do time."
          ],
          period: "2024"
        }
      ]
    }
  }
}
