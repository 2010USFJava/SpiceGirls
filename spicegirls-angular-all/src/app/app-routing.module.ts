import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'feed', component: FeedComponent},

  {path: 'user-profile', component: UserProfileComponent},
  {path: 'post', component: PostListComponent},
  {path: 'add', component: CreatePostComponent},
  {path: 'details/:pid', component: PostDetailsComponent},
 
  {path: 'profile/:id', component: UserProfileComponent},
  {path: 'update/:id', component: UserUpdateComponent},
  {path: 'register' , component: UserRegisterComponent},
  {path: 'list', component: UserListComponent},
  {path: 'details/:id', component: UserListComponent},

  {path: '', redirectTo:'/post', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
