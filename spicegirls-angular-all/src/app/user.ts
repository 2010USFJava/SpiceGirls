import { Post } from './post';

export class User{
    user_id:number;
    firstName:string;
    lastName:string;
    bio:string;
    profilePicture:any;
    posts:Post[];
}