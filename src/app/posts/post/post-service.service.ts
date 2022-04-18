import { Injectable } from '@angular/core';
import { TPost } from '../type/post_type';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private post : TPost[];
  constructor() { }
  AddLikedPost(postItem : TPost)
  {
    this.post.push(postItem);
  }
}
