import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TPost } from '../type/post_type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') public post: TPost;
  @Output('delete') postDelete: EventEmitter<number> = new EventEmitter();
  @Output() public postLiked: EventEmitter<TPost> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  handleLike()
  {
    this.postLiked.emit(this.post);
  }

}