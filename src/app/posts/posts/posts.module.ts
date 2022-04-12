import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import { PostsComponent } from './posts.component';



@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
