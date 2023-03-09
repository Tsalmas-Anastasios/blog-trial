import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';

const ROUTES = [{
  path: 'posts',
  component: PostsComponent,
  children: [
    {
      path: ':id',
      component: PostComponent
    }
  ]
}];

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgbModule
  ]
})
export class PostsModule { }
