import { CommentComponent } from './comment/comment.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  
const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
   {path: 'comment', component: CommentComponent},
  // otherwise redirect to home
  { path: '', component: PortfolioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
