import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterUserComponent } from './footer-user/footer-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    HomeComponent,
    AboutComponent,
    FooterUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
