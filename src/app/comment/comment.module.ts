import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { ChildcommentComponent } from './childcomment/childcomment.component';
import { DatacontainerDirective } from './comments-list/comments-list.component';
import { CommentComponent } from './comment.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CommentComponent,
    CommentboxComponent,
    CommentsListComponent,
    ChildcommentComponent,
    DatacontainerDirective
  ],
  providers: [],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ChildcommentComponent],
})
export class CommentModule { }