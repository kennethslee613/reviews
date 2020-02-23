import { Component, OnInit } from '@angular/core';
import { BlogCard } from 'src/app/models/BlogCard';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: BlogCard[] = [];
  errorMessage: string;

  constructor(private _blogService: BlogService) { }

  ngOnInit() {
    this._blogService.getBlogCards().subscribe((data) => {
      this.blogs = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }

}
