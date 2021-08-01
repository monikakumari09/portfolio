import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-childcomment',
  templateUrl: './childcomment.component.html',
  styleUrls: ['./childcomment.component.css']
})
export class ChildcommentComponent implements OnInit {

  childForm: FormGroup;
  replyComment: Array<object> = [];
  submitted: Boolean = false;
  @Output() userReplycomment = new EventEmitter();
  @Output() deletNo = new EventEmitter();
  @Input() commentNo: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.childForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.childForm.invalid) {
      return false;
    } else {
      this.replyComment.push({
        currentDate : new Date(),
        commentTxt: this.childForm.controls['comment'].value
      });
      this.userReplycomment.emit(this.replyComment);
      this.deletNo.emit(this.commentNo);
    }
  }

}