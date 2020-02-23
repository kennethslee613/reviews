import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BlogCard } from '../models/BlogCard';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BlogContent } from '../models/BlogContent';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private _blogsUrl: string = "/assets/data/blogs.json";
  private _blogContentsUrl: string = "/assets/data/blogContents.json";

  constructor(private http: HttpClient) { }

  getBlogCards(): Observable<BlogCard[]> {
    return this.http.get<BlogCard[]>(this._blogsUrl).pipe(
      retry(2),
      catchError(this.errorHandler)
    );
  }

  // Once backend and api is set up

  // getBlogCard(id): Observable<BlogCard> {
  //   return this.http.get<BlogCard[]>(this._blogsUrl).pipe(
  //     retry(2),
  //     catchError(this.errorHandler)
  //   );
  // }

  // getBlogContent(id): Observable<BlogContent> {
  //   return this.http.get<BlogContent[]>(this._blogContentsUrl).pipe(
  //     retry(2),
  //     catchError(this.errorHandler)
  //   );
  // }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Internal Server Error");
  }

}
