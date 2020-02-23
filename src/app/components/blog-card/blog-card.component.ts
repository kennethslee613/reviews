import { Component, OnInit, Input } from '@angular/core';
import { BlogCard } from 'src/app/models/BlogCard';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() blog: BlogCard;

  constructor() { }

  ngOnInit() {
  }

}
