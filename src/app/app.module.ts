import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageComponent } from './affichage/affichage.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { MenuComponent } from './menu/menu.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageComponent,
    AjoutArticleComponent,
    AuthentificationComponent,
    DetailArticleComponent,
    MenuComponent,
    PageErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
