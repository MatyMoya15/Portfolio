import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent
{

  activeTab: 'web' | 'mobile' = 'web';

  webProjects = [
    {
      name: 'NGEN — Generator Monitoring',
      description: 'Developed a real-time industrial monitoring dashboard using Angular, handling 17,000+ data points per device daily. Redesigned a legacy system into a high-performance, fully responsive interface, improving data visualization and user experience for live monitoring.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_scss_icon_130177.png',
        'https://cdn.icon-icons.com/icons2/2699/PNG/512/figma_logo_icon_170157.png'
      ],
      image: 'assets/web-img/ngen.png',
      codeLink: '',
      viewLink: ''
    },
    {
      name: 'Sports Club',
      description: 'Built a full-stack web platform for a soccer club using Angular and Node.js, including member registration, news management, and online payments via Mercado Pago. Deployed on Render with a PostgreSQL database hosted on Neon.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/css_original_logo_icon_146575.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_logo_icon_146389.png'
      ],
      image: 'assets/web-img/club.png',
      codeLink: 'https://github.com/MatyMoya15/Club/tree/main/Frontend',
      viewLink: 'https://clubfootballvm.netlify.app/'
    },
    {
      name: 'Gameshop',
      description: 'Built a full-stack e-commerce platform using Angular and Node.js, implementing product catalog, shopping cart, and a responsive UI optimized for performance and user experience.',
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
      name: 'Oil Company',
      description: 'Contributed to an enterprise web platform for audits, inspections, and ticket management. Focused on developing and improving the ticketing system within a large-scale Angular application.',
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
    }
  ];

  mobileProjects = [
    {
      name: 'Enterprise Mobile Apps',
      description: 'Led frontend and UX/UI development for multiple enterprise mobile applications using Ionic and Angular. Designed and implemented real-time monitoring systems and logistics apps, owning the full design process in Figma across 9+ projects.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ionic_icon_130522.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png',
        'https://cdn.icon-icons.com/icons2/2699/PNG/512/figma_logo_icon_170157.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_scss_icon_130177.png'
      ],
      image: 'assets/web-img/logos-mobile.png',
      codeLink: '',
      viewLink: ''
    },
    {
      name: 'Oil Company App',
      description: 'Collaborated on a mobile application for audits, inspections, and ticket management within an enterprise environment, contributing to frontend development using Ionic and Angular.',
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
      name: 'Pronounce It',
      description: 'Personal vocabulary app for learning English pronunciation. Features 450+ curated words with text-to-speech audio, Spanish translations, usage examples, and a speech recognition system that scores your pronunciation. Delivers 10 words per day with a spaced repetition system — mark words as mastered or send them back for more practice.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ionic_icon_130522.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_scss_icon_130177.png',
      ],
      image: 'assets/web-img/pronounce-it.png',
      codeLink: 'https://github.com/MatyMoya15/pronounce-it',
      viewLink: ''
    },
    {
      name: 'Sex Education App',
      description: 'Collaborated on a mobile application focused on inclusive sex education, implementing accessible interfaces and interactive features to enhance user engagement.',
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

  showWebProjects()
  {
    this.activeTab = 'web';
  }

  showMobileProjects()
  {
    this.activeTab = 'mobile';
  }

}
