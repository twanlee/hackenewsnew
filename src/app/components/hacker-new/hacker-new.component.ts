import { Component, OnInit } from '@angular/core';
import {ArticleService} from './article.service';
import {IArticle} from './iarticle';

@Component({
  selector: 'app-hacker-new',
  templateUrl: './hacker-new.component.html',
  styleUrls: ['./hacker-new.component.css']
})
export class HackerNewComponent implements OnInit {
  articles: IArticle[] = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getAll();
  }


}
