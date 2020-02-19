import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  reviewId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot);
    this.reviewId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
