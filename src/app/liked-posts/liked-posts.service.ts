import { Injectable } from '@angular/core';
import { TPost } from '../posts/type/post_type';

@Injectable({
  providedIn: 'root'
})
export class LikedPostsService {
  private items : TPost[] = [];

  constructor() { }
  getItems():TPost[]   // Hard to understand this syntax
  {
    return[...this.items]
  }
  addItem(item : TPost)
  {
    this.items.push(item);
  }

}

//ser
// getItems()   // :TPost[] Hard to understand this syntax
  

