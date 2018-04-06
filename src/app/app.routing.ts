import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkListComponent } from './park-list/park-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
