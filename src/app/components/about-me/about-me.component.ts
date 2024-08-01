import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill{
  name: string,
  imageUrl: string
};

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  
  skills: Skill[] = [
    { name: 'Angular', imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png' },
    { name: 'CSS 3', imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/css_original_logo_icon_146575.png' },
    { name: 'TypeScript', imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png' },
    { name: 'Ionic', imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ionic_icon_130522.png' },
    { name: 'Node Js', imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png' },
    { name: 'Bootstrap', imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png' },
    { name: 'Git', imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png' },
    { name: 'Figma', imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/figma_logo_icon_170157.png' },
    { name: 'Python', imageUrl: 'https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png' },
    { name: 'MySQL', imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png' },
    { name: 'Nest Js', imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nest_middleware_js_icon_130363.png' },
    { name: 'Tailwind CSS', imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png' },
  ];

}
