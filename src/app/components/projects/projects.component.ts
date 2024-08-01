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
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png'
      ],
      image: 'assets/web-img/gameshop.png',
      codeLink: 'https://github.com/MatyMoya15/GameShop',
      viewLink: 'https://gameshop-ecommerce.netlify.app/'
    },
    {
      name: 'Sports Club',
      description: 'Soccer club website featuring news, member registration, and dedicated sections for fans with information and updates on club activities.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png'
      ],
      image: 'assets/images/web2.png',
      codeLink: '',
      viewLink: ''
    }
  ];

  mobileProjects = [
    {
      name: 'Titulo de Mobil 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida augue at velit imperdiet, at luctus risus dignissim. Phasellus vitae sapien non ante fringilla pellentesque.',
      technologies: [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ionic_icon_130522.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/css_original_logo_icon_146575.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png'
      ],
      image: 'assets/images/mobile1.png',
      codeLink: '',
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
