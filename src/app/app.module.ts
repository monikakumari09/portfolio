import { CommentModule } from './comment/comment.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { ChartsModule } from 'ng2-charts';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';


import { ButtonsModule, InputsModule } from 'angular-bootstrap-md'
import { FooterComponent } from './footer/footer.component';
import { CertificationAchivementsComponent } from './certification-achivements/certification-achivements.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    CertificationAchivementsComponent,
    PortfolioComponent,
  ],
  imports: [
    CommentModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatListModule,
    MatSidenavModule,
    ChartsModule,
    AngularTypewriterEffectModule,
    MatExpansionModule,
    MatGridListModule,
    ButtonsModule,
    MatFormFieldModule,
    InputsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PortfolioComponent],

})
export class AppModule { }
