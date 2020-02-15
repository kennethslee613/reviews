import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog;
  @Output() idEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBlogClick() {
    this.idEvent.emit(this.blog.id);
  }

}
