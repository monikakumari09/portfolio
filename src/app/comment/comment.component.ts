import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  implements OnInit {
  localStorage: Storage;

  comments: string;
  count: number;
  constructor() {
    this.localStorage = window.localStorage;
   }

  ngOnInit() {
    this.count = 0;
    this.comments = this.get();
  }

  receiveComment($event) {
    this.comments = $event;
    this.count = this.comments.length;
    this.set();
  }

  recieveCount($event) {
    this.comments = $event;
    this.count = this.comments.length;
  }

  set() {
      this.localStorage.setItem("comments", JSON.stringify(this.comments));
  }

  get(): any {
      return JSON.parse(this.localStorage.getItem("comments"));
  }

  remove() {
      this.localStorage.removeItem("comments");
    }
}
