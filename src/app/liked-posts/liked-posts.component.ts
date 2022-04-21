import { Component, OnInit } from '@angular/core';
import { TPost } from '../posts/type/post_type';
import { LikedPostsService } from './liked-posts.service';

@Component({
  selector: 'app-liked-posts',
  templateUrl: './liked-posts.component.html',
  styleUrls: ['./liked-posts.component.css']
})
export class LikedPostsComponent implements OnInit {
  postItems : TPost[];

  constructor(private likePost : LikedPostsService) {  }

  ngOnInit(): void {}
  getPostItems()
  {
    this.postItems = this.likePost.getItems();
  }

}

//ser

