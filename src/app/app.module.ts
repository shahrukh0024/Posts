import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts/posts.component';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';
import { PostsDetailsComponent } from './Posts/posts-details/posts-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    LikedPostsComponent,
    PostsDetailsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ser
// PP

