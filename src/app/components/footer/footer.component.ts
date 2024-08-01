import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  abrirGithub(): void {
    window.open('https://github.com/MatyMoya15', '_blank');
  }

  abrirLinkedIn(): void {
    window.open('https://www.linkedin.com/in/matias-moyano-sd/', '_blank');
  }

  abrirInstagram(): void {
    window.open('https://www.instagram.com/matias_moya15/', '_blank');
  }

  abrirFacebook(): void {
    window.open('https://www.facebook.com/matias.moyano.332', '_blank');
  }

  abrirTwitter(): void {
    window.open('https://x.com/MatyMoyano15', '_blank');
  }

}
