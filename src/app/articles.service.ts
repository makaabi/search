import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  lesArticles = [
    new Article('../assets/stan.jpg', 'ASS78K', 'Adidas Stan Smith',300,true),
    new Article('../assets/nike.jpg','NAF544KF', 'Nike Air Force 1',240,true),
    new Article('../assets/nb.jpg', 'NB996FG', 'New Balance',300,true),
    new Article('../assets/vans.jpg','VOS475JU', 'Vans Old Skool',190,true)
    ]
  constructor() { }

  getArticleById(id : String) {
    var i:number;
    for (i=0;i<this.lesArticles.length;i++)
    {

      if(id==this.lesArticles[i].id)
      {
        return this.lesArticles[i];
      }

    }
    return null;
  }

  


}
