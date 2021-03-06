import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';


@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  obj:Article;
  id: String;
  
  
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private articlesService:ArticlesService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.obj=this.articlesService.getArticleById(this.id);
    console.log(this.activatedRoute.snapshot.params['id']);
  
  }

}
