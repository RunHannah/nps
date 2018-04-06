import { Injectable } from '@angular/core';
import { Blog } from './models/blog.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BlogService {
  blogs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.blogs = database.list('blogs');
  }

  getBlogs(){
    return this.blogs;
  }

  addBlogs(newBlog: Blog) {
    this.blogs.push(newBlog);
  }


}
