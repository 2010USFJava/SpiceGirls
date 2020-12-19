import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FeedComponent } from './feed/feed.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFriendProfileComponent } from './user-friend-profile/user-friend-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { LikePostComponent } from './like-post/like-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    FeedComponent,
    UserProfileComponent,
    UserFriendProfileComponent,
    UserLoginComponent,
    UserRegisterComponent,
    NavbarComponent,
    SearchUserComponent,
    LikePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
