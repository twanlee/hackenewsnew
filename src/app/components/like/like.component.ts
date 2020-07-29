import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  like:number = 0;
  liked(){
    this.like++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
