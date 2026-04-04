import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit
{

  phrases: string[] = [
    'Building clean, scalable web & mobile apps',
    'Angular & Ionic specialist',
    'Turning ideas into elegant interfaces',
    'Fueled by mate, driven by code',
    'Clean code. Real solutions. On time.'
  ];
  currentPhrase: string = this.phrases[0];
  phraseIndex: number = 0;

  ngOnInit()
  {
    this.changePhrase();
  }

  isVisible: boolean = true;

  changePhrase()
  {
    setInterval(() =>
    {
      this.isVisible = false;
      setTimeout(() =>
      {
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        this.currentPhrase = this.phrases[this.phraseIndex];
        this.isVisible = true;
      }, 500);
    }, 3000);
  }

  abrirGithub(): void
  {
    window.open('https://github.com/MatyMoya15', '_blank');
  }

  abrirLinkedIn(): void
  {
    window.open('https://www.linkedin.com/in/matias-moyano-sd/', '_blank');
  }

  abrirInstagram(): void
  {
    window.open('https://www.instagram.com/matias_moya15/', '_blank');
  }

}
