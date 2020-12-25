import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { UploadService } from './upload.service';
import { UploadFileComponent } from './upload/upload-file/upload-file.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';


const routes: Routes = [
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'login', component: UserLoginComponent},

  {path: 'user-profile', component: UserProfileComponent},
  {path: 'post', component: PostListComponent},
  {path: 'add', component: CreatePostComponent},
  {path: 'details/:pid', component: PostDetailsComponent},

  {path: 'profile/:id', component: UserProfileComponent},
  {path: 'update/:id', component: UserUpdateComponent},
  {path: 'register' , component: UserRegisterComponent},
  {path: 'list', component: UserListComponent},


  // {path: 'upload', component: UploadFileComponent},
  // {path: 'form-upload', component: FormUploadComponent},
  // {path: 'details-upload', component: DetailsUploadComponent},
  // {path: 'list-upload', component: ListUploadComponent},

  {path: 'details/:id', component: UserListComponent},


  {path: '', redirectTo:'/post', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
