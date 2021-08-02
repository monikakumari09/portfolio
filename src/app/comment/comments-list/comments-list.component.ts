import { Component, OnInit, Input, Output, OnChanges, EventEmitter,
  Directive, ViewContainerRef, ViewChildren, QueryList, ComponentFactoryResolver, AfterContentInit} from '@angular/core';import { ChildcommentComponent } from '../childcomment/childcomment.component';

@Directive({
  selector: '[datacontainer]',
})

export class DatacontainerDirective  {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent {
  @Input() postComment: Array<object> = [];
  @Output() countComments = new EventEmitter();
  public loadComponent = false;
  public commentIndex = 0;
  public reply: Array<object> = [];
  localStorage: Storage;


  // @ViewChildren decorator to grab elements from the host view
  /* The return type of ViewChildren is QueryList.
  QueryList is just a fancy name for an object that stores
  a list of items. What is special about this object is
  when the state of the application changes Angular will
  automatically update the object items for you. */
  @ViewChildren (DatacontainerDirective) entry: QueryList<DatacontainerDirective>;

  constructor(private resolver: ComponentFactoryResolver) {
    this.localStorage = window.localStorage;
   }

  ngOnInit() {
    this.postComment = this.get();
  }


  ngOnChanges() {
    if (this.postComment !== undefined) {
    }
  }

  removeComment(no) {
    this.postComment.splice(no, 1);
    this.countComments.emit(this.postComment);
    this.set();
  }

  replyComment(index) {
    this.loadComponent = true;
    const myFactory = this.resolver.resolveComponentFactory(ChildcommentComponent);
    if (this.entry.toArray()[index].viewContainerRef.length <= 0 ) {
      const myRef = this.entry.toArray()[index].viewContainerRef.createComponent(myFactory);
      myRef.instance['commentNo'] = index;
      myRef.changeDetectorRef.detectChanges();
      myRef.instance.userReplycomment.subscribe(
        data => {
          this.receiveReplyComment(data, index);
          this.set();
        }
      );
      myRef.instance.deletNo.subscribe(
        no => {
          myRef.destroy();
        }
      );
    }
  }

  receiveReplyComment($event, i) {
    this.reply = $event;
    this.postComment.forEach((element) => {
      if (element['commentId'] === i) {
        element['replyComment'].push(...$event);
        this.set();

      }
    });
    this.loadComponent = false;
  }

  set() {
    this.localStorage.setItem("replyComments", JSON.stringify(this.postComment));
}

get(): any {
    return JSON.parse(this.localStorage.getItem("replyComments"));
}

}
