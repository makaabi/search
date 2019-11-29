import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  theArticles :Article[];

  Libelleart:String="";
  afficher:boolean=false;
  constructor(private articlesService:ArticlesService) { }

  ngOnInit() {
    this.theArticles=this.articlesService.lesArticles;
  }

  getid(id:String){
    this.articlesService.getArticleById(id);
  }

  



}
