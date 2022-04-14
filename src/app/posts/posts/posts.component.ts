import { Component, OnInit } from '@angular/core';
import { TPost } from '../type/post_type';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void { }
  handlePostDelete(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}