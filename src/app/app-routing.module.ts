import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AffichageComponent } from './affichage/affichage.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';


const routes: Routes = [
{path:'menu', component:MenuComponent},
{path:'affichage', component:AffichageComponent},
{path:'ajoutarticle', component:AjoutArticleComponent},
{path:'authentification', component:AuthentificationComponent},
{path:'pageerreur', component:PageErreurComponent},
{path:'affichage/:matricule', component:DetailArticleComponent},
{path:'', redirectTo:'authentification', pathMatch:'full'},
{path:'**', component:PageErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
