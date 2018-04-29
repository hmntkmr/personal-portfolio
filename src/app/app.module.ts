import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { ContactsMapComponent } from './contacts-map/contacts-map.component';
import { ContactsSocialComponent } from './contacts-social/contacts-social.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { WorkComponent } from './work/work.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    ProfilePageComponent,
    ProfileHeaderComponent,
    ProfileMainComponent,
    ContactsMapComponent,
    ContactsSocialComponent,
    ContactFormComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
