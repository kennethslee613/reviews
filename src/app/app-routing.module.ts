import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogListComponent
      },
      {
        path: ':id',
        component: BlogContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
