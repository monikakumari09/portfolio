import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  linkedinUrl: string = 'https://www.linkedin.com/in/monika-kumari-113762168/';
  facebookUrl:string = 'https://www.facebook.com/monika.kumari.37051579/';
  instagramUrl: string = 'https://www.instagram.com/__monika_09/';
  githubUrl:string = 'https://github.com/monikakumari09';
  gmailUrl: string = 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvpDjCKBfXRdzBkrdNLsGmmhHwbMpDDlpMhwtBkwjLRHZjhMCKrPhDBGFjcVZSVwPhWdGW';
  constructor() { }

  ngOnInit(): void {
  }

}
