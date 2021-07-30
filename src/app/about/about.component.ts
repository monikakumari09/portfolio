import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  list = ['Hi, I am Monika. I work as a front end developer. Currently I am staying in Bengaluru, India. I have completed my graduation in Information technology and currently working at Bosch.']

  ngOnInit(): void {
  }

}
