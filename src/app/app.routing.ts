import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkListComponent } from './park-list/park-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { StateFormComponent } from './state-form/state-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BlogPostsComponent
  },
  {
    path: 'blog-details/:id',
    component: BlogDetailComponent
  },
  {
    path: 'results',
    component: StateFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
