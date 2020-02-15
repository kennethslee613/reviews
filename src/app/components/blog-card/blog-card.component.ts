import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() blog: Blog;
  @Output() idEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBlogClick() {
    this.idEvent.emit(this.blog.id);
  }

}
