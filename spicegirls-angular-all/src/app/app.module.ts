import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FeedComponent } from './feed/feed.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { LikePostComponent } from './like-post/like-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CookieService } from 'ngx-cookie-service';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    FeedComponent,
    UserProfileComponent,
    UserLoginComponent,
    UserRegisterComponent,
    NavbarComponent,
    SearchUserComponent,
    LikePostComponent,
    PostListComponent,
    PostDetailsComponent,
    UserListComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
