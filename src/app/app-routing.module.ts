import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts/posts.component';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';
import { PostsDetailsComponent } from './Posts/posts-details/posts-details.component';


const routes: Routes = [
  {path : "posts", component : PostsComponent},
  {path : "liked-post", component : LikedPostsComponent},
  {path : "posts/:id", component :PostsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
