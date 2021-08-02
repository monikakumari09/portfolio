import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  linkedinUrl: string = 'https://www.linkedin.com/in/monika-kumari-113762168/';
  facebookUrl:string = 'https://www.facebook.com/monika.kumari.37051579/';
  instagramUrl: string = 'https://www.instagram.com/__monika_09/';
  githubUrl:string = 'https://github.com/monikakumari09';
  gmailUrl: string = 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvpDjCKBfXRdzBkrdNLsGmmhHwbMpDDlpMhwtBkwjLRHZjhMCKrPhDBGFjcVZSVwPhWdGW';
}
