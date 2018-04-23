import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BlogComponent } from './blog/blog.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent}
  // { path: '**', component: PageNotFountComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true} 
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
