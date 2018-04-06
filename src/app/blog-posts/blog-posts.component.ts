import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog.model';
// import { BlogService } from '../blog.service';
import { FirebaseListObservable } from 'angularfire2/database';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css'],
  providers: [BlogService]
})
export class BlogPostsComponent implements OnInit {
  blogs: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

  goToDetailPage(clickedBlog) {
    this.router.navigate(['blog-details', clickedBlog.$key]);
  };

}
