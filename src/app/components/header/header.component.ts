import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  phrases: string[] = [
    'Passionate about coding',
    'Lover of mate and code',
    'I enjoy solving problems with clean, scalable solutions',
    'Creating solutions with software',
    'A professional and imaginative developer'
  ];
  currentPhrase: string = this.phrases[0];
  phraseIndex: number = 0;

  ngOnInit() {
    this.changePhrase();
  }

  changePhrase() {
    setInterval(() => {
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      this.currentPhrase = this.phrases[this.phraseIndex];
    }, 3000); // Cambia la frase cada 3 segundos
  }


  abrirGithub(): void {
    window.open('https://github.com/MatyMoya15', '_blank');
  }

  abrirLinkedIn(): void {
    window.open('https://www.linkedin.com/in/matias-moyano-sd/', '_blank');
  }

  abrirInstagram(): void {
    window.open('https://www.instagram.com/matias_moya15/', '_blank');
  }

}
