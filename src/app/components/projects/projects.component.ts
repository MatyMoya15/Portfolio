import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  activeTab: 'web' | 'mobile' = 'web';

  webProjects = [
    {
      name: 'Gameshop',
      description: 'E-commerce website for electronics and games, designed to provide an intuitive interface and an optimized user experience.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/css_original_logo_icon_146575.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_mongo_icon_130383.png'

      ],
      image: 'assets/web-img/gameshop.png',
      codeLink: 'https://github.com/MatyMoya15/GameShop',
      viewLink: 'https://gameshopmm.netlify.app/'
    },
    {
      name: 'Sports Club',
      description: 'Soccer club website featuring news, member registration, and dedicated sections for fans with information and updates on club activities.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/css_original_logo_icon_146575.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png',

      ],
      image: 'assets/web-img/club.png',
      codeLink: 'https://github.com/MatyMoya15/Club/tree/main/Frontend',
      viewLink: 'https://clubfootballvm.netlify.app/'
    },
    {
      name: 'Oil Company',
      description: 'Collaborated on a website for a major oil company. The site facilitates audits, inspections, tickets, and chat, with my focus on the ticketing feature.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nest_middleware_js_icon_130363.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/css_original_logo_icon_146575.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png'
      ],
      image: 'assets/web-img/shell-web.png',
      codeLink: '',
      viewLink: 'https://shell-hsse.com/'
    },
  ];

  mobileProjects = [
    {
      name: 'Oil Company App',
      description: 'Collaborated on an app for a major oil company with a "Shell" logo, designed for audits, inspections, and ticket management.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ionic_icon_130522.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nest_middleware_js_icon_130363.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_scss_icon_130177.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png'
      ],
      image: 'assets/web-img/shell-app.png',
      codeLink: '',
      viewLink: ''
    },
    {
      name: 'Sex Education App',
      description: 'Collaborate on a sex education app with accessibility and AR options, designed to promote engaging learning experiences for users.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ionic_icon_130522.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_scss_icon_130177.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png'
      ],
      image: 'assets/web-img/esi-app.jpg',
      codeLink: 'https://github.com/EsiGroupITS/AppEsi',
      viewLink: ''
    }
  ];

  showWebProjects() {
    this.activeTab = 'web';
  }

  showMobileProjects() {
    this.activeTab = 'mobile';
  }

}
