import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];

  constructor() { }

  ngOnInit() {
    this.blogs = [
      {
        title: "Audio Technica Microphone",
        summary: "Taking a look at Audio Technica's affordable microphone and how it performs in different settings.",
        datetime: new Date(),
        tags: ["tech", "microphones"].sort()
      },
      {
        title: "Guitar Water Mug",
        summary: "A simple mug that can be used to drink from.",
        datetime: new Date(),
        tags: ["home"].sort()
      },
      {
        title: "Samsung Galaxy S9",
        summary: "Why I still have the Galaxy S9 even though it's not the latest phone out on the market.",
        datetime: new Date(),
        tags: ["tech", "phones", "samsung", "other", "extra", "random", "tags", "that", "okay"].sort()
      },
      {
        title: "Samsung Galaxy S9",
        summary: "Why I still have the Galaxy S9 even though it's not the latest phone out on the market.",
        datetime: new Date(),
        tags: ["tech", "phones", "samsung"].sort()
      },
      {
        title: "Samsung Galaxy S9",
        summary: "Why I still have the Galaxy S9 even though it's not the latest phone out on the market.",
        datetime: new Date(),
        tags: ["tech", "phones", "samsung"].sort()
      },
      {
        title: "Samsung Galaxy S9",
        summary: "Why I still have the Galaxy S9 even though it's not the latest phone out on the market.",
        datetime: new Date(),
        tags: ["tech", "phones", "samsung"].sort()
      }
    ]
  }

}
